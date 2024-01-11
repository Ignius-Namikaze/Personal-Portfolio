function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
function toggleDarkMode() {
            var body = document.querySelector('body');
            body.classList.toggle('dark-mode');
            var toggleButton = document.querySelector('#toggle-dark-mode');
            toggleButton.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
        }