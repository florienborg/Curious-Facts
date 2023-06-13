/* const { test, expect } = require('jest'); */

const { describe } = require('yargs');
const {
  displayFact,
  showFavoriteButton,
  hideFavoriteButton,
  addFavoriteFact,
} = require('./code.js');
const { it } = require('node:test');
const { default: expect } = require('expect');
describe("displayFacts", ()=>{
  it("debe ser declarada", ()=> {
    expect(typeof displayFact).toBe("function");
  });
});
// Pruebas para la función displayFact
test('El texto debe mostrarse correctamente', () => {
  document.body.innerHTML = '<div id="factText"></div>';
  displayFact('This is a test fact');
  expect(document.getElementById('factText').textContent).toBe('This is a test fact');
});

// Pruebas para la función showFavoriteButton
test('El botón de favorito no debe tener la clase "hidden"', () => {
  document.body.innerHTML = '<button id="favoriteButton" class="hidden"></button>';
  showFavoriteButton();
  expect(document.getElementById('favoriteButton').classList.contains('hidden')).toBe(false);
});

test('El botón de favorito debe tener la clase "hidden"', () => {
  document.body.innerHTML = '<button id="favoriteButton"></button>';
  hideFavoriteButton();
  expect(document.getElementById('favoriteButton').classList.contains('hidden')).toBe(true);
});

// Pruebas para la función addFavoriteFact
test('Debe agregarse un elemento a la lista de frases favoritas', () => {
  document.body.innerHTML = '<ul id="favoriteQuotes"></ul>';
  addFavoriteFact();
  expect(document.getElementById('favoriteQuotes').children.length).toBe(1);
});

test('Debe eliminarse un elemento al hacer clic en el botón de eliminar', () => {
  document.body.innerHTML = '<ul id="favoriteQuotes"><li>This is a test fact<button>X</button></li></ul>';
  addFavoriteFact();

  const deleteButton = document.querySelector('#favoriteQuotes li button');
  deleteButton.click();

  expect(document.getElementById('favoriteQuotes').children.length).toBe(0);
});
 