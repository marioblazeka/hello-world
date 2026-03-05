function showTime() {
	document.getElementById('currentTime').innerHTML =
		new Date().toLocaleString("hr-HR", { timeZone: "Europe/Zagreb" });
}
