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

  return Math.floor(((priceBySize[this.size] + this.toppings.length * .50) * (1 + salesTax)) * 100)/100;
};

$(function() {
  $(".btn-danger").attr("disabled", true);
  $(".btn-danger").css("opacity", 0);
  var pizzas = [];
  var total = 0;
  $("#cost-calc").on("submit", function(e) {
    e.preventDefault();

    var size = $("#size").val();
    var toppings = [];
    $("#toppings input:checked").each(function(index,value) {
      toppings.push($(this).val());
    });

    var pizza = new Pizza(size, toppings);
    pizzas.push[pizza];
    $(".result").append("<h4>Size: " + pizza.size + "</h3>");
    $(".result").append("<h4>Toppings:</h3><ul>");
    for(var i in pizza.toppings) {
      $(".result").append("<li>" + pizza.toppings[i] + "</li>");
    }
    $(".result").append("</ul>");
    $(".result").append("<h4>Pizza Total: $" + pizza.cost().toFixed(2) + "</h5>");
    $(".result").append("<hr />");
    total += pizza.cost();
    $("#total h3").text("Order Total: $" + total.toFixed(2));
    $(".btn-danger").attr("disabled", false);
    $(".btn-danger").css("opacity", 1);
  });

  $(".btn-danger").on("click", function() {
    pizzas = [];
    total = 0;
    $(".result").empty();
    $("#total h3").empty();
    $(".btn-danger").attr("disabled", true);
    $(".btn-danger").css("opacity", 0);
  })
});
