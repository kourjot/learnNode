
  const form = document.querySelector("form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const skillSelect = document.getElementById("skill");
  const outputContainer = document.createElement("div");

  form.after(outputContainer);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const skill = skillSelect.value;

    if (name === "" || email === "" || skill === "") {
      alert("Please fill out all fields.");
      return;
    }

    const userCard = document.createElement("div");
    userCard.classList.add("user-card");
    userCard.innerHTML = `
      <h4>${name}</h4>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Skill:</strong> ${skill}</p>
    `;

    outputContainer.appendChild(userCard);

    // Reset form
    form.reset();
  });

