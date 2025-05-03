import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import "../App.css";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [clock, setClock] = useState("");

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, [page]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const options = { weekday: "long", month: "long", day: "numeric" };
      const time = now.toLocaleTimeString();
      const date = now.toLocaleDateString("en-US", options);
      setClock(`${time} ${date}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => setPage((p) => Math.max(p - 1, 1));
  const handleNext = () => setPage((p) => p + 1);

  return (
    <div className="container">
      <h1>Rick and Morty Characters</h1>
      <div className="grid">
        {characters.slice(0, 6).map((char) => (
          <div key={char.id} className="card">
            <img src={char.image} alt={char.name} />
            <h3>{char.name}</h3>
            <p><b>Species:</b> {char.species}</p>
            <p><b>Status:</b> {char.status}</p>
            <Link to={`/character/${char.id}`} target="_blank">View Details</Link>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
      <footer>
        <p>{clock}</p>
      </footer>
    </div>
  );
};

export default CharacterList;