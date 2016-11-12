// Back-end logic
var toppingsArray = [];
var toppingsCost;
var toppingsAsString;

function pizza (size, toppings, cost) {
  this.size = size;
  this.toppings = toppings;
  this.cost = cost;
};

pizza.prototype.pizzaCost = function() {
  if (this.size === "personal") {
    this.cost += 10;
  } else if (this.size === "medium") {
    this.cost += 14;
  } else if (this.size === "large") {
    this.cost += 18;
  } else if (this.size === "giant") {
    this.cost += 22
  }
  toppingsCost = toppingsArray.length;
  this.cost += toppingsCost;
}


// Front-end logic
$(document).ready(function() {
  $("#submit").click(function(event) {
    event.preventDefault();
    toppingsArray = [];

    $("input:checkbox[name=topping]:checked").each(function() {
      toppingsArray.push($(this).val());
    });

    toppingsAsString = toppingsArray.join(", ");

    var newPizza = new pizza (
    $("#size option:selected").val(),
    toppingsArray,
    0);

    newPizza.pizzaCost();

    $("div#output").text("You ordered a " + newPizza.size + " " + toppingsAsString + " " + "pizza and your total is $" + newPizza.cost);
    console.log(toppingsArray);
  });
});
