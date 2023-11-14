let celsius = document.getElementById('celsius');
let fahrenheit = document.getElementById('fahrenheit');
let kelvin = document.getElementById('kelvin');
let convertBtn = document.getElementById('convert-btn');

convertBtn.addEventListener('click', function() {
	let celsiusValue = parseFloat(celsius.value);
	let fahrenheitValue = (celsiusValue * 9/5) + 32;
	let kelvinValue = celsiusValue + 273.15;
	fahrenheit.value = fahrenheitValue.toFixed(2);
	kelvin.value = kelvinValue.toFixed(2);
});

