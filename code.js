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
