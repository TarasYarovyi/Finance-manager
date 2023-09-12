"use strict";

let availableMoney;
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

// addTransactionPanel.style.display = "flex";

document.addEventListener("DOMContentLoaded", main);

function main() {
  prepareDOMElements();
  prepareDOMEvents();
}

function prepareDOMElements() {
  availableMoney = document.querySelector(".available-money");
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
  transaction.className = "transaction";
  transaction.id = id;

  const transactionName = document.createElement("p");
  transactionName.className = "transaction-name";
  transactionName.textContent = addNameInput.value;

  const transactionIcon = document.createElement("i");
  transactionIcon.className = "fas fa-money-bill-wave";

  const transactionAmount = document.createElement("p");
  transactionAmount.className = "transaction-amount";
  transactionAmount.textContent = addAmountInput.value + " zł";

  const transactionDelete = document.createElement("button");
  transactionDelete.className = "delete";
  const transactionDeleteIcon = document.createElement("i");
  transactionDeleteIcon.className = "fas fa-times";

  transactionName.insertBefore(transactionIcon, transactionName.firstChild);
  transaction.appendChild(transactionName);
  transaction.appendChild(transactionAmount);
  transactionAmount.appendChild(transactionDelete);
  transactionDelete.appendChild(transactionDeleteIcon);

  id++;
  addTransactionPanel.style.display = "none";
  incomeArea.appendChild(transaction);
}
