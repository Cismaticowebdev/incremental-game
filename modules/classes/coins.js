export class Coins {
  static name = "Coins";
  static quantity = 10;
  static quantityPerSecond = 0;

  static getQuantity() {
    if (this.quantity < 1000000) {
      return this.quantity;
    } else {
      return this.quantity.toExponential(2);
    }
  }

  static getQuantityPerSecond() {
    if (this.quantityPerSecond < 1000000) {
      return this.quantityPerSecond;
    } else {
      return this.quantityPerSecond.toExponential(2);
    }
  }

  static resetCoins() {
    this.quantity = 10;
    this.quantityPerSecond = 0;
  }
}
