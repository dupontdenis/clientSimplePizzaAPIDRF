function renderIngredient(ingredient) {
  return `
    <li class="list-group-item d-flex justify-content-between">
      <span>${ingredient.name}</span>
      <span>${Number(ingredient.price).toFixed(2)} €</span>
    </li>
  `;
}

function renderIngredients(selectedIngredients) {
  return selectedIngredients.map(renderIngredient).join("");
}

function renderIngredientsList(selectedIngredients) {
  return `
    <ul class="list-group">
      ${renderIngredients(selectedIngredients)}
    </ul>
  `;
}

export function displayIngredients(container, pizza, listIngredients) {
  const selectedIngredients = listIngredients.filter((ingredient) =>
    pizza.ingredients.includes(ingredient.id),
  );

  container.innerHTML = `
    <h2 class="h5">Ingrédients de ${pizza.name}</h2>
    ${renderIngredientsList(selectedIngredients)}
  `;
}
