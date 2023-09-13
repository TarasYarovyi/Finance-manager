"use strict";

let availableMoneyElement;
let addTransactionBtn;
let deleteAllBtn;
let incomeArea;
let expensesArea;
let deleteBtn;
let colorButtons;
let addTransactionPanel;
let addNameInput;
let addAmountInput;
let addCategoryInput;
let saveBtn;
let cancelBtn;
let id = 0;
let availableMoney = 0;

document.addEventListener("DOMContentLoaded", main);

function main() {
  prepareDOMElements();
  prepareDOMEvents();
}

function prepareDOMElements() {
  availableMoneyElement = document.querySelector(".available-money");
  addTransactionBtn = document.querySelector(".add-transaction");
  deleteAllBtn = document.querySelector(".delete-all");
  incomeArea = document.querySelector(".income-area");
  expensesArea = document.querySelector(".expenses-area");
  deleteBtn = document.querySelector(".delete");
  colorButtons = document.querySelector(".color-buttons");
  addTransactionPanel = document.querySelector(".add-transaction-panel");
  addNameInput = document.querySelector("#name");
  addAmountInput = document.querySelector("#amount");
  addCategoryInput = document.querySelector("#category");
  saveBtn = document.querySelector(".save");
  cancelBtn = document.querySelector(".cancel");
}

function prepareDOMEvents() {
  addTransactionBtn.addEventListener("click", addTransaction);
  saveBtn.addEventListener("click", createTransaction);
}

function addTransaction() {
  addTransactionPanel.style.display = "flex";
}

function createTransaction() {
  const transaction = document.createElement("div");
  const transactionIcon = document.createElement("i");
  const transactionName = document.createElement("p");
  const transactionAmount = document.createElement("p");
  const transactionDelete = document.createElement("button");
  const transactionDeleteIcon = document.createElement("i");

  let amount = +addAmountInput.value;

  switch (addCategoryInput.value) {
    case "income":
      transactionIcon.className = "fas fa-money-bill-wave";
      availableMoney += amount;
      incomeArea.appendChild(transaction);
      break;
    case "shopping":
      transactionIcon.className = "fas fa-cart-arrow-down";
      availableMoney -= amount;
      expensesArea.appendChild(transaction);
      break;
    case "food":
      transactionIcon.className = "fas fa-hamburger";
      availableMoney -= amount;
      expensesArea.appendChild(transaction);
      break;
    case "cinema":
      transactionIcon.className = "fas fa-film";
      availableMoney -= amount;
      expensesArea.appendChild(transaction);
      break;

    default:
      break;
  }
  transaction.className = "transaction";
  transaction.id = ++id;
  transactionName.className = "transaction-name";
  transactionName.textContent = addNameInput.value;
  transactionAmount.textContent = amount + " zł";
  transactionAmount.className = "transaction-amount";
  transactionDelete.className = "delete";
  transactionDeleteIcon.className = "fas fa-times";

  transactionName.insertBefore(transactionIcon, transactionName.firstChild);
  transaction.appendChild(transactionName);
  transaction.appendChild(transactionAmount);
  transactionAmount.appendChild(transactionDelete);
  transactionDelete.appendChild(transactionDeleteIcon);

  availableMoneyElement.textContent = availableMoney + " zł";
  addTransactionPanel.style.display = "none";
}
