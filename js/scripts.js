function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.cost = function() {
  var salesTax = 0.05;
  var priceBySize = new Object();
  priceBySize["small"] = 10.00;
  priceBySize["medium"] = 12.00;
  priceBySize["large"] = 14.00;
  priceBySize["xl"] = 16.00;

  return (priceBySize[this.size] + this.toppings.length * .50) * (1 + salesTax);
};
