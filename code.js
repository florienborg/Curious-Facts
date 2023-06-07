const buttonSurprise = document.querySelector(".button-surprise");
const factText = document.getElementById("factText");

buttonSurprise.addEventListener("click", async () => {
  try {
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
    const data = await response.json();
    factText.textContent = data.text;
  } catch (error) {
    console.error(error);
  }
});


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