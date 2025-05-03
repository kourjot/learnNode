let currentPage = 1;

function fetchCharacters(page) {
  fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then(res => res.json())
    .then(data => {
      displayCharacters(data.results);
      document.getElementById("page-number").innerText = `Page: ${page}`;
    });
}

function displayCharacters(characters) {
  const gallery = document.getElementById("character-gallery");
  gallery.innerHTML = "";

  characters.forEach(character => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${character.image}" alt="${character.name}">
      <h3>${character.name}</h3>
      <p>Status: ${character.status}</p>
      <p>Species: ${character.species}</p>
    `;
    card.addEventListener("click", () => {
      window.open(`detail.html?id=${character.id}`, "_blank");
    });
    gallery.appendChild(card);
  });
}

document.getElementById("next-btn").addEventListener("click", () => {
  currentPage++;
  fetchCharacters(currentPage);
});

document.getElementById("prev-btn").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    fetchCharacters(currentPage);
  }
});

function updateClock() {
  const now = new Date();
  const options = { weekday: "long", month: "long", day: "numeric" };
  const time = now.toLocaleTimeString();
  const date = now.toLocaleDateString("en-US", options);
  document.getElementById("clock").innerText = `${time} ${date}`;
}
setInterval(updateClock, 1000);

fetchCharacters(currentPage);
