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

favoriteButton.addEventListener("click", () => {
    const favoriteFact = factText.textContent;
    const listItem = document.createElement("li");
    listItem.textContent = favoriteFact;
    favoritesList.appendChild(listItem);
  });

/*
const emptyHeart = document.getElementById("empty-heart");
const solidHeart = document.getElementById("solid-heart");

emptyHeart.addEventListener("click", () => {
  emptyHeart.style.display = "none";
  solidHeart.style.display = "inline-block";
});

solidHeart.addEventListener("click", () => {
  solidHeart.style.display = "none";
  emptyHeart.style.display = "inline-block";
});

// Obtener referencias a los elementos del DOM
const heartImage = document.getElementById('heartImage');
const heartList = document.getElementById('favorite-heart');

// Agregar un evento de clic a la imagen del corazón
heartImage.
heartImage
addEventListener('click', function() {
  // Crear un nuevo elemento de lista
  
 
const newHeart = document.createElement('li');
  newHeart.
  newHeart
innerHTML = '<img src="corazon.png" alt="Corazón">';

  

 
// Agregar el nuevo elemento de lista a la lista existente
  heartList.
  heart

 
appendChild(newHeart);

  

 


// Desplazar el scroll al final de la lista
  heartList.
  heartList

 
scrollTop = heartList.scrollHeight;
}); */

