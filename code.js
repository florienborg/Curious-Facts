/* const buttonSurprise = document.querySelector(".button-surprise");
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

favoriteButton.addEventListener("click", () => {
    const favoriteFact = factText.textContent;
    const listItem = document.createElement("li");
    listItem.textContent = favoriteFact;
    favoriteQuotes.appendChild(listItem);
  });

 ------------------ */

 const buttonSurprise = document.querySelector(".button-surprise");
const factText = document.getElementById("factText");
const favoriteButton = document.getElementById("favoriteButton"); // Agrega el ID correcto para el botón del corazón

favoriteButton.classList.add("hidden"); // Oculta el botón del corazón inicialmente

buttonSurprise.addEventListener("click", async () => {
  try {
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
    const data = await response.json();
    factText.textContent = data.text;
    favoriteButton.classList.remove("hidden"); // Muestra el botón del corazón después de hacer clic en "Surprise"
  } catch (error) {
    console.error(error);
  }
});

favoriteButton.addEventListener("click", () => {
  const favoriteFact = factText.textContent;
  const listItem = document.createElement("li");
  listItem.textContent = favoriteFact;
  favoriteQuotes.appendChild(listItem);
});



 


