document.addEventListener("DOMContentLoaded", function () {

  function showTime() {
    const now = new Date();
    const formatted = now.toLocaleTimeString("hr-HR", {
      timeZone: "Europe/Zagreb",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });

    document.getElementById("currentTime").textContent = formatted;
  }

  showTime();
  setInterval(showTime, 1000);

});
