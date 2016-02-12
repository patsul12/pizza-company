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

  return (Math.floor(((priceBySize[this.size] + this.toppings.length * .50) * (1 + salesTax)) * 100)/100).toFixed(2);
};

$(function() {
  $("#cost-calc").on("submit", function(e) {
    e.preventDefault();

    var size = $("#size").val();
    var toppings = [];
    $("#toppings input:checked").each(function(value) {
      toppings.push(value);
    });

    var pizza = new Pizza(size, toppings);
    $(".result").empty();
    $(".result").append("<h3>" + pizza.size + "</h3>")
    $(".result").append("<h3>" + pizza.toppings + "</h3>")
    $(".result").append("<h3>$" + pizza.cost() + "</h3>")
  })
})
