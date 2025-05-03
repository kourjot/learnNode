import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../App.css";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [clock, setClock] = useState("");

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data));
  }, [id]);

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

  if (!character) return <h2>Loading...</h2>;

  return (
    <div className="container">
      <h1>Character Detail</h1>
      <div className="card">
        <img src={character.image} alt={character.name} />
        <h2>{character.name}</h2>
        <p><b>Status:</b> {character.status}</p>
        <p><b>Species:</b> {character.species}</p>
        <p><b>Type:</b> {character.type || "Unknown"}</p>
        <p><b>Gender:</b> {character.gender}</p>
        <p><b>Origin:</b> {character.origin.name}</p>
        <p><b>Location:</b> {character.location.name}</p>
        <p><b>Episodes:</b> {character.episode.length}</p>
      </div>
      <footer>
        <p>{clock}</p>
      </footer>
    </div>
  );
};

export default CharacterDetail;