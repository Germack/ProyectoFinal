// renderStays.js
import { stays } from "./stays.js";

export function renderStays(filteredStays = stays) {
  const container = document.querySelector("#stays-container");
  container.innerHTML = ""; // limpiar antes de renderizar

  if (filteredStays.length === 0) {
    container.innerHTML = `<p class="text-gray-500 text-center mt-8">No stays found for your search.</p>`;
    return;
  }

  filteredStays.forEach((stay) => {
    const card = document.createElement("div");
    card.className =
      "bg-white rounded-xl overflow-hidden transition w-full md:w-[45%] lg:w-[30%]";

    card.innerHTML = `
      <img src="${stay.photo}" class="w-full object-cover rounded-xl aspect-3/2" />
      <div class="p-4">
        <div class="flex justify-between items-center mb-2">
            <div>
            <span class="text-sm text-gray-500">${stay.type}</span>
            <span class="text-sm text-gray-500">.</span>
            <span class="text-sm text-gray-500">${stay.beds}</span>
            </div>
            <span class="text-sm font-semibold text-yellow-500">⭐ ${stay.rating}</span>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-1">${stay.title}</h3>
      </div>
    `;

    container.appendChild(card);
  });
}

