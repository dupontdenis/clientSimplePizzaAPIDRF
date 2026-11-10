function renderPizzaOption(pizza) {
  return `
    <option value="${pizza.name}">${pizza.name}</option>
  `;
}

export function displayPizzas(select, pizzas) {
  select.innerHTML = `
    <option value="">liste des 🍕</option>
    ${pizzas.map(renderPizzaOption).join("")}
  `;
}
export function displayPrice(container, pizza, price) {
  container.classList.add("alert", "alert-success", "mt-3");
  container.textContent = `${pizza.name} : ${price.toFixed(2)} €`;
}
