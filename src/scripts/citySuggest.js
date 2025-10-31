// citySuggest.js
import { stays } from "./stays.js";

export function initCitySuggest(modalLocationInput, locationInput) {
  // Generar lista única de ciudades "City, Country"
  const cities = [...new Set(stays.map(s => `${s.city}, ${s.country}`))];

  // Contenedor suggestions en DOM
  const locationSuggestions = document.getElementById("locationSuggestions");

function showSuggestions(text) {
    const filtered = cities.filter(city =>
      city.toLowerCase().includes(text.toLowerCase())
    );

    if (!text || filtered.length === 0) {
      locationSuggestions.innerHTML = "";
      locationSuggestions.classList.add("hidden");
      return;
    }

    // 🔥 Construir HTML con bucle tradicional
    let html = "";
    for (let i = 0; i < filtered.length; i++) {
      html += `<li class="px-4 py-2 hover:bg-gray-100">${filtered[i]}</li>`;
    }
    locationSuggestions.innerHTML = html;
    locationSuggestions.classList.remove("hidden");

    // Click en ciudad sugerida
    const listItems = locationSuggestions.querySelectorAll("li");
    for (let i = 0; i < listItems.length; i++) {
      listItems[i].addEventListener("click", () => {
        modalLocationInput.value = listItems[i].textContent;
        locationInput.value = listItems[i].textContent;
        locationSuggestions.classList.add("hidden");
      });
    }
}

// Escuchar lo que escribe el usuario
modalLocationInput.addEventListener("input", e => {
    console.log("Escribiendo:", e.target.value); // ✅ Depuración
    showSuggestions(e.target.value);
});
}

