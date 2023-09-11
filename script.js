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
  saveBtn.addEventListener("click", save);
}

function addTransaction() {
  addTransactionPanel.style.display = "flex";
}

function save() {
  const transaction = document.createElement("div");
  transaction.setAttribute("class", "transaction");
  transaction.setAttribute("id", `${id}`);
}
