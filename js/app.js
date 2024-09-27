const donationForms = document.querySelectorAll(".donation-form");
const balance = parseInt(document.querySelector(".balance").textContent);

donationForms.forEach((donationForm, index) => {
  donationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(donationForm);
    const data = Object.fromEntries(formData.entries());
    const amount = parseInt(data.donateAmount);

    console.log(balance - amount);
  });
});
