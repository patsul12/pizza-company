describe('Pizza', function() {
  var toppings = ["cheese", "pepperoni", "salami", "mushrooms"]
  var testPizza = new Pizza("large", toppings);

  it("creates a pizza with given size and toppings", function() {
    expect(testPizza.size).to.equal("large");
    expect(testPizza.toppings).to.eql(toppings)
  });

  it("calculates the cost of a pizza", function() {
    expect(testPizza.cost()).to.equal(16.80)
  });
})
