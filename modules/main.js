import { Coins } from "./classes/coins.js";

const coinBtn = document.getElementById('upgrade1-btn');

coinBtn.addEventListener('click', function () {
    Coins.quantityPerSecond += 1;
});

function gameLoop() {
    Coins.quantity += Coins.quantityPerSecond;
    const coinTotal = document.getElementById('coin-total');
    const coinPerSecond = document.getElementById('coin-per-second');
    coinTotal.textContent = `${Coins.quantity}`;
    coinPerSecond.textContent = `${Coins.quantityPerSecond}`
}

setInterval(gameLoop, 1000);