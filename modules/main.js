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
const upgrade2 = new Upgrade('Upgrade 2', 100);
const upgrade3 = new Upgrade('Upgrade 3', 2000);
const upgrade4 = new Upgrade('Upgrade 4', 30000);
const upgrade5 = new Upgrade('Upgrade 5', 500000);
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
    updateCoins();
    upgrade1SpanLevel.textContent = `${upgrade1.level}`;
    upgrade1SpanCost.textContent = `${upgrade1.cost}`;
}

function updateCoins() {
    coinTotal.textContent = `${Coins.quantity}`;
    coinPerSecond.textContent = `${Coins.quantityPerSecond}`;
}


function gameLoop() {
    Coins.quantity += Coins.quantityPerSecond;
    checkAvailableUpgrades();
    updateScreen();
}

setInterval(gameLoop, 1000);

function checkAvailableUpgrades() {
    if (Coins.quantity >= 100) {
        upgrade2Btn.classList.remove('hidden');
    }

    if (Coins.quantity >= 2000) {
        upgrade3Btn.classList.remove('hidden');
    }

    if (Coins.quantity >= 30000) {
        upgrade4Btn.classList.remove('hidden');
    }

    if (Coins.quantity >= 500000) {
        upgrade5Btn.classList.remove('hidden');
    }
}
