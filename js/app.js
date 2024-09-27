const donationForms = document.querySelectorAll(".donation-form");
let balance = parseInt(document.querySelector(".balance").textContent, 10);
const invalidModal = document.getElementById("invalid-input");
const successModal = document.getElementById("success");
const lowBalanceModal = document.getElementById("enough-balance");

donationForms.forEach((donationForm) => {
  donationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(donationForm);
    const data = Object.fromEntries(formData.entries());
    const amount = parseInt(data.donateAmount, 10);
    const totalDonatedAmountElement = document.querySelector(".donated-amount");
    let totalDonatedAmount = parseInt(
      totalDonatedAmountElement.textContent,
      10
    );

    if (isNaN(amount) || amount < 0) {
      invalidModal.showModal();
      return;
    }

    if (amount > balance) {
      lowBalanceModal.showModal();
      return;
    }

    if (amount > 0) {
      updateBalance(amount);
      totalDonatedAmount += amount;
      totalDonatedAmountElement.textContent = totalDonatedAmount;
      successModal.showModal();
      return;
    }
  });
});

function updateBalance(amount) {
  balance -= amount;
  const currentBalance = document.querySelector(".balance");
  currentBalance.textContent = balance;
}
