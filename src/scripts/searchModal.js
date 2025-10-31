// searchModal.js
import { initCitySuggest } from "./citySuggest.js";
import { filterStays } from "./filterStays.js";
import { renderStays } from "./renderStay.js";

const overlay = document.getElementById("searchOverlay");

export function initSearchModal({ locationInput, guestsInput, button, modal }) {
  const adultPlus = modal.querySelector("#adultPlus");
  const adultMinus = modal.querySelector("#adultMinus");
  const childPlus = modal.querySelector("#childPlus");
  const childMinus = modal.querySelector("#childMinus");
  const adultCountEl = modal.querySelector("#adultCount");
  const childCountEl = modal.querySelector("#childCount");

  const modalLocationInput = modal.querySelector("#modalLocationInput");
  const modalGuestsInput = modal.querySelector("#modalGuestsInput");
  const closeModalBtn = modal.querySelector("#closeModalBtn");
  const applySearchBtn = modal.querySelector("#applySearchBtn");

  let adults = 0;
  let children = 0;

function openModal() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

function closeModal() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

function updateGuests() {
    const total = adults + children;
    guestsInput.value = total > 0 ? `${total} guests` : "";
    modalGuestsInput.value = guestsInput.value;
}

// Contadores
adultPlus.addEventListener("click", () => {
    adults++;
    adultCountEl.textContent = adults;
    updateGuests();
});

adultMinus.addEventListener("click", () => {
    if (adults > 0) adults--;
    adultCountEl.textContent = adults;
    updateGuests();
});

childPlus.addEventListener("click", () => {
    children++;
    childCountEl.textContent = children;
    updateGuests();
});

childMinus.addEventListener("click", () => {
    if (children > 0) children--;
    childCountEl.textContent = children;
    updateGuests();
});

// Abrir modal
locationInput.addEventListener("click", () => {
    modalLocationInput.value = locationInput.value;
    openModal();
});

guestsInput.addEventListener("click", () => {
    modalGuestsInput.value = guestsInput.value;
    openModal();
});

button.addEventListener("click", openModal);

// Sincronizar texto
modalLocationInput.addEventListener("input", () => {
    locationInput.value = modalLocationInput.value;
});

// Activar sugerencias
initCitySuggest(modalLocationInput, locationInput);

// Cerrar modal
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Aplicar búsqueda
applySearchBtn.addEventListener("click", () => {
    const totalGuests = adults + children;
    const city = modalLocationInput.value.trim();

// Solo filtramos y renderizamos usando las funciones ya existentes
    const filtered = filterStays(city, totalGuests);
    renderStays(filtered);

    closeModal();
  });
}


