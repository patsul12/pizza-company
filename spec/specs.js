describe('Pizza', function() {
  it("creates a pizza with given size and toppings", function() {
    var toppings = ["cheese", "pepperoni", "salami", "mushrooms"]
    var testPizza = new Pizza("large", toppings);
    expect(testPizza.size).to.equal("large");
    expect(testPizza.toppings).to.eql(toppings)
  });
})
