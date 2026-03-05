document.addEventListener("DOMContentLoaded", function () {

  function showTime() {
    const now = new Date();

    const formattedTime = now.toLocaleTimeString("hr-HR", {
      timeZone: "Europe/Zagreb",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });

    document.getElementById("currentTime").textContent = formattedTime;
  }

  showTime();
  setInterval(showTime, 1000);

});
