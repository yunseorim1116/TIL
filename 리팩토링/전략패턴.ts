interface PricingStrategy {
  calculatePrice(price: number): number;
}

class RegularPriceStrategy implements PricingStrategy {
  calculatePrice(price: number): number {
    return price;
  }
}

class Product {
  private price: number;
  private pricingStrategy: PricingStrategy;

  caculator(price: number, pricingStrategy: PricingStrategy) {
    this.price = this.price;
    this.pricingStrategy = this.pricingStrategy;
  }
  calculateFinalPrice(): number {
    return this.pricingStrategy.calculatePrice(this.price);
  }
}
