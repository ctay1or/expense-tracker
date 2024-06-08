const button = document.querySelector(".show-results");
const results = document.querySelector(".results");
const expensesList = document.querySelector(".expenses");

const expenses = [
  9.99, 25.8, 144.39, 12.98, 4.99, 38.75, 14.5, 99.99, 75.4, 4.75, 62.88,
];

//List is displayed on the screen. When user clicks the button, min and max items are displayed and button is disabled.

for (let exp of expenses) {
  let li = document.createElement("li");
  li.innerText = `$ ${exp}`;
  expensesList.append(li);
}

const showMinMax = function (expenses) {
  const min = Math.min(...expenses);
  const max = Math.max(...expenses);

  const minLi = document.createElement("li");
  minLi.innerText = `Min: $ ${min}`;

  const maxLi = document.createElement("li");
  maxLi.innerText = `Max: $ ${max}`;

  results.append(minLi);
  results.append(maxLi);

  results.classList.remove("hide");
};

button.addEventListener("click", function () {
  showMinMax(expenses);
  button.disabled = true;
});
