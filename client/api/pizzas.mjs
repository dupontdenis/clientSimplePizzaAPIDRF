import { API_URL } from "../config.mjs";

export async function getPizzas() {
  const response = await fetch(`${API_URL}/pizzas/`);

  if (!response.ok) {
    throw new Error("Impossible de récupérer les pizzas.");
  }

  return response.json();
}

export async function getPizzaByName(name) {
  const response = await fetch(
    `${API_URL}/pizzas/${encodeURIComponent(name)}/`,
  );

  if (!response.ok) {
    throw new Error("Pizza introuvable.");
  }

  return response.json();
}
