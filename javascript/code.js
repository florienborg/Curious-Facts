

const buttonSurprise = document.querySelector(".button-surprise");
const factText = document.getElementById("factText");
const favoriteButton = document.getElementById("favoriteButton"); 

favoriteButton.classList.add("hidden"); 

buttonSurprise.addEventListener("click", async () => {
  try {
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
    const data = await response.json();
    factText.textContent = data.text;
    favoriteButton.classList.remove("hidden"); 
  } catch (error) {
    console.error(error);
  }
});



favoriteButton.addEventListener("click", () => {
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
  });
  


 


