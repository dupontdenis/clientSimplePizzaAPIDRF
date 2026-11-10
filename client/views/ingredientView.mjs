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

export function displayIngredients(container, pizza, listIngredients) {
  const selectedIngredients = listIngredients.filter((ingredient) =>
    pizza.ingredients.includes(ingredient.id),
  );
  console.log(pizza.ingredients, selectedIngredients);

  container.innerHTML = `
    <h2 class="h5">Ingrédients de ${pizza.name}</h2>
    <ul class="list-group">
      ${renderIngredients(selectedIngredients)}
    </ul>
  `;
}
