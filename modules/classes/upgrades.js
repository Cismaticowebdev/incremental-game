import { Coins } from "./coins.js";

export class Upgrade {
    name;
    initialCost;
    cost;
    level;
    constructor(name, initialCost) {
        this.name = name;
        this.initialCost = initialCost;
        this.level = 1;
        this.cost = initialCost;
    }

    updateCost() {
        this.cost = this.initialCost * this.level;
    }
}