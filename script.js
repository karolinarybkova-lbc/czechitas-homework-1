const fahrenheit = Number(prompt("Zadejte teplotu ve Fahrenheitech:"));
const celsius = (fahrenheit - 32) * 5 / 9;
const celsiusRounded = Math.round(celsius / 5) * 5;

document.body.innerHTML += "<p>Teplota v Celsiích je " + celsiusRounded + " °C.</p>";
