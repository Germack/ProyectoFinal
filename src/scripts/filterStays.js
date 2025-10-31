// filterStays.js
import { stays } from "./stays.js";

export function filterStays(location, guests) {
  const guestCount = Number(guests) || 0;
  const locationLower = location.trim().toLowerCase();

if (!locationLower && guestCount === 0) {
    console.log("➡️ Sin filtros, devolviendo todos");
    return stays;
}

// Divide por coma: ej. "Turku, Finland" → ["turku", "finland"]
  const [cityPart, countryPart] = locationLower.split(",").map(s => s?.trim() || "");

  const filtered = stays.filter((stay) => {
    const cityMatch = cityPart
      ? stay.city.toLowerCase().includes(cityPart)
      : true;

    const countryMatch = countryPart
      ? stay.country.toLowerCase().includes(countryPart)
      : true;

    const guestsMatch = guestCount > 0
      ? stay.maxGuests >= guestCount
      : true;

    return cityMatch && countryMatch && guestsMatch;
  });
  return filtered;
}



