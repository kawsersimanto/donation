const tabs = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs[0].classList.add("active");
tabContents[0].classList.add("active");

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    tabs.forEach((tab) => tab.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));

    tab.classList.add("active");

    const targetTab = tab.getAttribute("data-tab");
    const targetContent = document.querySelector(
      `[data-tab-content="${targetTab}"]`
    );
    targetContent.classList.add("active");
  });
});
