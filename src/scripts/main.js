/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

// main.js
import { renderStays } from "./renderStay.js";
import { initSearchModal } from "./searchModal.js";

document.addEventListener("DOMContentLoaded", () => {
  renderStays();

  const locationInput = document.querySelector("input[placeholder='Add location']");
  const guestsInput = document.querySelector("input[placeholder='Add guests']");
  const searchBtn = document.querySelector("#lupa");
  const modal = document.querySelector("#searchModal");

  initSearchModal({
    locationInput,
    guestsInput,
    button: searchBtn,
    modal
  });
});

