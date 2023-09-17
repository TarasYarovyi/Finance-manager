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
let nameInfo;
let amountInfo;
let categoryInfo;
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
  nameInfo = document.querySelector(".name-info");
  addAmountInput = document.querySelector("#amount");
  amountInfo = document.querySelector(".amount-info");
  addCategoryInput = document.querySelector("#category");
  categoryInfo = document.querySelector(".category-info");
  saveBtn = document.querySelector(".save");
  cancelBtn = document.querySelector(".cancel");
}

function prepareDOMEvents() {
  addTransactionBtn.addEventListener("click", addTransaction);
  cancelBtn.addEventListener("click", cancelTransaction);
  saveBtn.addEventListener("click", createTransaction);
  document.addEventListener("click", deleteTransaction);
  deleteAllBtn.addEventListener("click", deleteAllTransaction);
}
function deleteAllTransaction() {
  while (incomeArea.childNodes.length > 2) {
    incomeArea.removeChild(incomeArea.lastChild);
  }
  while (expensesArea.childNodes.length > 2) {
    expensesArea.removeChild(expensesArea.lastChild);
  }
  availableMoney = 0;
  availableMoneyElement.textContent = availableMoney + " zł";
}

function addTransaction() {
  addTransactionPanel.style.display = "flex";
}
function cancelTransaction() {
  addTransactionPanel.style.display = "none";
}
function deleteTransaction(e) {
  if (e.target.parentElement.classList.contains("delete")) {
    const value = e.target.closest("p").dataset.value;

    if (e.target.closest("div").parentElement === incomeArea) {
      availableMoney -= value;
    } else {
      availableMoney += +value;
    }

    availableMoneyElement.textContent = availableMoney + " zł";
    e.target.closest("div").remove();
  }
}

function createTransaction() {
  if (!addNameInput.value) {
    animate(nameInfo);
    return;
  } else if (!addAmountInput.value) {
    animate(amountInfo);
    return;
  } else if (!addCategoryInput.value) {
    animate(categoryInfo);
    return;
  }

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
  transactionAmount.dataset.value = amount;

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
  addNameInput.value = "";
  addAmountInput.value = "";
  addCategoryInput.value = "";
}

function animate(element) {
  element.style.animation = "shake .3s";
  setTimeout(() => {
    element.style.animation = "";
  }, 300);
}
