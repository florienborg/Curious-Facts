const buttonSurprise = document.querySelector(".button-surprise");
const factText = document.getElementById("factText");

buttonSurprise.addEventListener("click", async () => {
  try {
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
    const data = await response.json();
    factText.textContent = data.text;
  }  catch (error) {
    console.error(error);
  } 
});

let lastSavedFact = null;
const alertMessage = document.querySelector(".alert-message")

favoriteButton.addEventListener("click", () => {
    const favoriteFact = factText.textContent;

    if (favoriteFact === lastSavedFact) {
      showErrorMessage("This is already in your faves. Scroll down and check ;)!");
      return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = favoriteFact;
    favoriteQuotes.appendChild(listItem);

    lastSavedFact = favoriteFact;
  });

  function showErrorMessage(message) {
    alertMessage.textContent = message;
  }