const params = new URLSearchParams(window.location.search);
const id = params.get("id");

function fetchCharacter(id) {
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json())
    .then(data => {
      displayCharacter(data);
    });
}

function displayCharacter(character) {
  const container = document.getElementById("character-detail");
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
  <div>
    <img src="${character.image}" alt="${character.name}">
    </div>
    <div>
    <h2>${character.name}</h2>
    <p><b>Status:</b> ${character.status}</p>
    <p> <b> Species:</b> ${character.species}</p>
    <p> <b> Type: </b>${character.type || "Unknown"}</p>
    <p> <b> Gender:</b> ${character.gender}</p>
    <p> <b> Origin: </b>${character.origin.name}</p>
    <p> <b> Location:</b> ${character.location.name}</p>
    <p> <b> Episodes:</b> ${character.episode.length}</p>
    <div>
  `;
  container.appendChild(card);
}

function updateClock() {
  const now = new Date();
  const options = { weekday: "long", month: "long", day: "numeric" };
  const time = now.toLocaleTimeString();
  const date = now.toLocaleDateString("en-US", options);
  document.getElementById("clock").innerText = `${time} ${date}`;
}
setInterval(updateClock, 1000);

fetchCharacter(id);
