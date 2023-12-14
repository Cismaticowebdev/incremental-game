import { Coins } from './classes/coins.js';
import { Upgrade } from './classes/upgrades.js'

const coinTotal = document.getElementById('coin-total');
const coinPerSecond = document.getElementById('coin-per-second');
const upgrade1SpanLevel = document.getElementById('upgrade1-span-level');
const upgrade1SpanCost = document.getElementById('upgrade1-span-cost');
const upgrade1Btn = document.getElementById('upgrade1-btn');
const upgrade1 = new Upgrade('Upgrade 1', 0, 0);

upgrade1Btn.addEventListener('click', function () {
    if (upgrade1.cost <= Coins.quantity) {
        Coins.quantity -= upgrade1.cost;
        Coins.quantityPerSecond += 1;
        upgrade1.level++;
        upgrade1.updateCost();
    }
});

function gameLoop() {
    Coins.quantity += Coins.quantityPerSecond;
    coinTotal.textContent = `${Coins.quantity}`;
    coinPerSecond.textContent = `${Coins.quantityPerSecond}`;
    upgrade1SpanLevel.textContent = `${upgrade1.level}`;
    upgrade1SpanCost.textContent = `${upgrade1.cost}`;
}

setInterval(gameLoop, 1000);