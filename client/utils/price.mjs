function findIngredient(id, listIngredients) {
  return listIngredients.find((ingredient) => ingredient.id === id);
}

export function calculatePrice(pizza, listIngredients) {
  return pizza.ingredients.reduce((total, ingredientId) => {
    const ingredient = findIngredient(ingredientId, listIngredients);

    return total + (ingredient ? Number(ingredient.price) : 0);
  }, 0);
}
