function addToHistory(amount, location) {
  const history = document.querySelector(".history");
  const div = document.createElement("div");
  div.classList.add(
    "flex",
    "flex-col",
    "gap-4",
    "lg:p-8",
    "p-4",
    "border",
    "border-accent-10",
    "rounded-2xl"
  );
  div.innerHTML = `
  <h2 class="text-xl font-bold">${amount} Taka is Donated for Flood at ${location}</h2>
    <p class="text-base text-accent-70 font-light">Date : ${getCurrentTime()} GMT +0600 (Bangladesh Standard Time)</p>`;
  history.insertBefore(div, history.children[0]);
}
