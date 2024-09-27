let balance = parseInt(document.querySelector(".balance").textContent, 10);
const donationForms = document.querySelectorAll(".donation-form");
const modals = {
  invalid: document.getElementById("invalid-input"),
  success: document.getElementById("success"),
  lowBalance: document.getElementById("enough-balance"),
};

donationForms.forEach((form) =>
  form.addEventListener("submit", handleDonation)
);

function handleDonation(e) {
  e.preventDefault();

  const form = e.target;
  const location = getLocation(form);
  const amount = getDonationAmount(form);
  const totalDonatedAmountElement = getTotalDonatedAmountElement(form);
  let totalDonatedAmount = parseInt(totalDonatedAmountElement.textContent, 10);

  if (!isValidAmount(amount)) {
    modals.invalid.showModal();
    return;
  }

  if (!hasEnoughBalance(amount)) {
    modals.lowBalance.showModal();
    return;
  }

  updateBalance(amount);
  totalDonatedAmountElement.textContent = totalDonatedAmount + amount;
  modals.success.showModal();
  addToHistory(amount, location);
}

function getLocation(form) {
  return form.closest(".content").querySelector(".location").textContent;
}

function getDonationAmount(form) {
  const formData = new FormData(form);
  return parseInt(Object.fromEntries(formData.entries()).donateAmount, 10);
}

function getTotalDonatedAmountElement(form) {
  return form.closest(".content").querySelector(".donated-amount");
}

function isValidAmount(amount) {
  return !isNaN(amount) && amount > 0;
}

function hasEnoughBalance(amount) {
  return amount <= balance;
}

function updateBalance(amount) {
  balance -= amount;
  document.querySelector(".balance").textContent = balance;
}
