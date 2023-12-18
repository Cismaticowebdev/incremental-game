import { Coins } from './classes/coins.js';
import { Upgrade } from './classes/upgrades.js'

const coinTotal = document.getElementById('coin-total');
const coinPerSecond = document.getElementById('coin-per-second');
const upgrade1SpanLevel = document.getElementById('upgrade1-span-level');
const upgrade1SpanCost = document.getElementById('upgrade1-span-cost');
const upgrade1Btn = document.getElementById('upgrade1-btn');
const upgrade2Btn = document.getElementById('upgrade2-btn');
const upgrade3Btn = document.getElementById('upgrade3-btn');
const upgrade4Btn = document.getElementById('upgrade4-btn');
const upgrade5Btn = document.getElementById('upgrade5-btn');
const upgradeBtnArray = new Array;
upgradeBtnArray.push(upgrade1Btn, upgrade2Btn, upgrade3Btn, upgrade4Btn, upgrade5Btn);
const upgrade1 = new Upgrade('Upgrade 1', 10);
const upgrade2 = new Upgrade('Upgrade 2', 10);
const upgrade3 = new Upgrade('Upgrade 3', 10);
const upgrade4 = new Upgrade('Upgrade 4', 10);
const upgrade5 = new Upgrade('Upgrade 5', 10);
const upgradeArray = new Array;
upgradeArray.push(upgrade1, upgrade2, upgrade3, upgrade4, upgrade5);

upgradeBtnArray.forEach((upgradeBtn, index) => {
    let upgrade = upgradeArray[index];
    upgradeBtn.addEventListener('click', function () {
        if (upgrade.cost <= Coins.quantity) {
            Coins.quantity -= upgrade.cost;
            Coins.quantityPerSecond += 1;
            upgrade.level++;
            upgrade.updateCost();
            updateScreen();
        }
    });
});

function updateScreen() {
    coinTotal.textContent = `${Coins.quantity}`;
    coinPerSecond.textContent = `${Coins.quantityPerSecond}`;
    upgrade1SpanLevel.textContent = `${upgrade1.level}`;
    upgrade1SpanCost.textContent = `${upgrade1.cost}`;
}

function gameLoop() {
    Coins.quantity += Coins.quantityPerSecond;
    updateScreen();
}

setInterval(gameLoop, 1000);
