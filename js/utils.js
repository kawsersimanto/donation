function isValid(amount) {
  return !isNaN(amount) && amount > 0;
}

function hasEnoughBalance(amount, balance) {
  return amount <= balance;
}

function getCurrentTime() {
  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return formattedDate;
}
