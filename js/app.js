let balance = parseInt(document.querySelector(".balance").textContent, 10);
const donationForms = document.querySelectorAll(".donation-form");

donationForms.forEach((form) =>
  form.addEventListener("submit", handleDonation)
);

function handleDonation(e) {
  e.preventDefault();

  const form = e.target;
  const { location, amount, totalElement } = getDonationDetails(form);
  let totalAmount = parseInt(totalElement.textContent, 10);

  if (!isValid(amount)) {
    modals.invalid.showModal();
    return;
  }

  if (!hasEnoughBalance(amount, balance)) {
    modals.lowBalance.showModal();
    return;
  }

  updateBalance(amount);
  totalElement.textContent = totalAmount + amount;
  modals.success.showModal();
  addToHistory(amount, location);
}

function updateBalance(amount) {
  balance -= amount;
  document.querySelector(".balance").textContent = balance;
}
