function updateTime() {
  const now = new Date();
  document.getElementById("currentTime").textContent = now.toLocaleString();
}

updateTime();
setInterval(updateTime, 1000);
