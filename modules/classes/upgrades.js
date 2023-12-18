import { Coins } from "./coins.js";

export class Upgrade {
    name;
    initialCost;
    cost;
    level;
    coinsProduction;
    constructor(name, initialCost, coinsProduction) {
        this.name = name;
        this.initialCost = initialCost;
        this.level = 1;
        this.cost = initialCost;
        this.coinsProduction = coinsProduction;
    }

    updateCost() {
        this.cost = this.initialCost * this.level;
    }
}