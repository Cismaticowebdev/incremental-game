import { Coins } from "./coins.js";

export class Upgrade {
    name;
    cost;
    level;
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
        this.level = 0;
    }

    updateCost() {
        this.cost = 10 * this.level;
    }
}