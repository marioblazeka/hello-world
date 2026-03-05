document.addEventListener("DOMContentLoaded", function () {

  function showTime() {
    const element = document.getElementById("currentTime");
    if (!element) {
      console.log("Element nije pronađen");
      return;
    }

    element.textContent =
      new Date().toLocaleString("hr-HR", { timeZone: "Europe/Zagreb" });
  }

  showTime();
  setInterval(showTime, 1000);

});
