import { API_URL } from "../config.mjs";

export async function getIngredients() {
  const response = await fetch(`${API_URL}/ingredients/`);

  if (!response.ok) {
    throw new Error("Impossible de récupérer les ingrédients.");
  }

  return response.json();
}
