const modals = {
  invalid: document.getElementById("invalid-input"),
  success: document.getElementById("success"),
  lowBalance: document.getElementById("enough-balance"),
};

function openModal() {
  document.querySelector(".show-alert").classList.add("modal-open");
}

function closeModal() {
  document.querySelector(".show-alert").classList.remove("modal-open");
}
