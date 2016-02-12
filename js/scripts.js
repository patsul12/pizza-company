function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.cost = function() {
  var salesTax = 0.05;
  var priceBySize = {
    small: 10.00,
    medium: 12.00,
    large: 14.00,
    xl: 16.00
  }

  return (priceBySize[this.size] + this.toppings.length * .50) * (1 + salesTax);
};
