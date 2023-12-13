import {Coins} from "./classes/coins.js";

const coinBtn = document.getElementById('coin-btn');

coinBtn.addEventListener('click', function () {
    const coinSpan = document.getElementById('coin-span');
    Coins.quantity += 1;
    coinSpan.textContent = `${Coins.quantity}`;
});