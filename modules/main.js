import { Coins } from "./classes/coins.js";
import { Upgrade } from "./classes/upgrades.js";

const upgrade1Btn = document.getElementById("upgrade1-btn");
const upgrade2Btn = document.getElementById("upgrade2-btn");
const upgrade3Btn = document.getElementById("upgrade3-btn");
const upgrade4Btn = document.getElementById("upgrade4-btn");
const upgrade5Btn = document.getElementById("upgrade5-btn");
const upgradeBtnArray = new Array();
upgradeBtnArray.push(
  upgrade1Btn,
  upgrade2Btn,
  upgrade3Btn,
  upgrade4Btn,
  upgrade5Btn
);
const upgrade1 = new Upgrade("Upgrade 1", 10, 1);
const upgrade2 = new Upgrade("Upgrade 2", 100, 10);
const upgrade3 = new Upgrade("Upgrade 3", 2000, 50);
const upgrade4 = new Upgrade("Upgrade 4", 30000, 100);
const upgrade5 = new Upgrade("Upgrade 5", 500000, 200);
const upgradeArray = new Array();
upgradeArray.push(upgrade1, upgrade2, upgrade3, upgrade4, upgrade5);
const prestigeBtn = document.getElementById("prestige-btn");
prestigeBtn.addEventListener("click", resetGame);

upgradeBtnArray.forEach((upgradeBtn, index) => {
  let upgrade = upgradeArray[index];
  upgradeBtn.addEventListener("click", function () {
    if (upgrade.cost <= Coins.quantity) {
      Coins.quantity -= upgrade.cost;
      Coins.quantityPerSecond += upgrade.coinsProduction;
      upgrade.level++;
      upgrade.updateCost();
      updateScreen();
    }
  });
});

function updateScreen() {
  updateCoins();
  updateUpgrades();
}

function updateCoins() {
  const coinTotal = document.getElementById("coin-total");
  const coinPerSecond = document.getElementById("coin-per-second");
  coinTotal.textContent = `${Coins.getQuantity()}`;
  coinPerSecond.textContent = `${Coins.getQuantityPerSecond()}`;
}

function updateUpgrades() {
  const upgrade1SpanLevel = document.getElementById("upgrade1-span-level");
  const upgrade1SpanCost = document.getElementById("upgrade1-span-cost");
  upgrade1SpanLevel.textContent = `${upgrade1.level}`;
  upgrade1SpanCost.textContent = `${upgrade1.cost}`;

  const upgrade2SpanLevel = document.getElementById("upgrade2-span-level");
  const upgrade2SpanCost = document.getElementById("upgrade2-span-cost");
  upgrade2SpanLevel.textContent = `${upgrade2.level}`;
  upgrade2SpanCost.textContent = `${upgrade2.cost}`;

  const upgrade3SpanLevel = document.getElementById("upgrade3-span-level");
  const upgrade3SpanCost = document.getElementById("upgrade3-span-cost");
  upgrade3SpanLevel.textContent = `${upgrade3.level}`;
  upgrade3SpanCost.textContent = `${upgrade3.cost}`;

  const upgrade4SpanLevel = document.getElementById("upgrade4-span-level");
  const upgrade4SpanCost = document.getElementById("upgrade4-span-cost");
  upgrade4SpanLevel.textContent = `${upgrade4.level}`;
  upgrade4SpanCost.textContent = `${upgrade4.cost}`;

  const upgrade5SpanLevel = document.getElementById("upgrade5-span-level");
  const upgrade5SpanCost = document.getElementById("upgrade5-span-cost");
  upgrade5SpanLevel.textContent = `${upgrade5.level}`;
  upgrade5SpanCost.textContent = `${upgrade5.cost}`;
}

function gameLoop() {
  Coins.quantity += Coins.quantityPerSecond;
  checkAvailableUpgrades();
  updateScreen();
}

setInterval(gameLoop, 1000);

function checkAvailableUpgrades() {
  if (Coins.quantity >= 100) {
    upgrade2Btn.classList.remove("hidden");
  }

  if (Coins.quantity >= 2000) {
    upgrade3Btn.classList.remove("hidden");
  }

  if (Coins.quantity >= 30000) {
    upgrade4Btn.classList.remove("hidden");
  }

  if (Coins.quantity >= 500000) {
    upgrade5Btn.classList.remove("hidden");
  }
}

function resetGame() {
  // Reset Coins
  Coins.resetCoins();

  // Hide all buttons but the first one
  for (let i = 1; i < upgradeBtnArray.length; i++) {
    upgradeBtnArray.pop();
  }

  // Reset all the upgrades
  upgradeArray.forEach((upgrade) => {
    upgrade.resetUpgrade();
  });

  updateScreen();
}
