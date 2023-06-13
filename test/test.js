const factText = document.getElementById("factText");
const favoriteButton = document.getElementById("favoriteButton");
const favoriteQuotes = document.getElementById("favoriteQuotes");

function displayFact(text) {
  factText.textContent = text;
}

function showFavoriteButton() {
  favoriteButton.classList.remove("hidden");
}

function hideFavoriteButton() {
  favoriteButton.classList.add("hidden");
}

function addFavoriteFact() {
  const favoriteFact = factText.textContent;
  const listItem = document.createElement("li");
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  listItem.textContent = favoriteFact;
  listItem.appendChild(deleteButton);
  favoriteQuotes.appendChild(listItem);

  deleteButton.addEventListener("click", () => {
    listItem.remove();
  });
}

async function getRandomFact() {
  try {
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
    const data = await response.json();
    displayFact(data.text);
    showFavoriteButton();
  } catch (error) {
    console.error(error);
  }
}

 buttonSurprise.addEventListener("click", getRandomFact);
favoriteButton.addEventListener("click", addFavoriteFact); 
module.exports={
  displayFact,
  showFavoriteButton,
  hideFavoriteButton,
  addFavoriteFact,
}