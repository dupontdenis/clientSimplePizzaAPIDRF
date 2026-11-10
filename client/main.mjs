import { getPizzas, getPizzaByName } from "./api/pizzas.mjs";
import { getIngredients } from "./api/ingredients.mjs";
import { calculatePrice } from "./utils/price.mjs";
import { displayPizzas, displayPrice } from "./views/pizzaView.mjs";
import { displayIngredients } from "./views/ingredientView.mjs";


const pizzaName = document.querySelector("#pizzaName");
const result = document.querySelector("#result");
const ingredientsResult = document.querySelector("#ingredientsResult");

const calculate = document.querySelector("#calculate");
const ingredientsButton = document.querySelector("#ingredients");
const pizzaSelect = document.querySelector("#pizzaName");


// Charger la liste des pizzas au démarrage
try {
  const pizzas = await getPizzas();
  displayPizzas(pizzaName, pizzas);
} catch (error) {
  result.textContent = error.message;
}

// Calculer le prix
calculate.addEventListener("click", async () => {
  if (!pizzaName.value) {
    result.textContent = "Choisissez une pizza.";
    return;
  }

  try {
    const pizza = await getPizzaByName(pizzaName.value);
    const ingredients = await getIngredients();
    const price = calculatePrice(pizza, ingredients);

    displayPrice(result, pizza, price);
  } catch (error) {
    result.textContent = error.message;
  }
});

// Afficher les ingrédients
ingredientsButton.addEventListener("click", async () => {
  if (!pizzaName.value) {
    ingredientsResult.textContent = "Choisissez une pizza.";
    return;
  }

  try {
    const pizza = await getPizzaByName(pizzaName.value);
    const ingredients = await getIngredients();

    displayIngredients(ingredientsResult, pizza, ingredients);
  } catch (error) {
    ingredientsResult.textContent = error.message;
  }
});

pizzaSelect.addEventListener("change", () => {
  result.classList.remove("alert", "alert-success", "mt-3");
  result.innerHTML = "";
  ingredientsResult.innerHTML = "";
});