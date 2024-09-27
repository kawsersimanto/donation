function getLocation(form) {
  return form.closest(".content").querySelector(".location").textContent;
}

function getDonationDetails(form) {
  const location = form
    .closest(".content")
    .querySelector(".location").textContent;
  const amount = getDonationAmount(form);
  const totalElement = form
    .closest(".content")
    .querySelector(".donated-amount");
  return { location, amount, totalElement };
}

function getDonationAmount(form) {
  const formData = new FormData(form);
  return parseInt(Object.fromEntries(formData.entries()).donateAmount, 10);
}

function getTotalElement(form) {
  return form.closest(".content").querySelector(".donated-amount");
}
