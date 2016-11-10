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
  if (newPizza.size === "personal") {
    newPizza.cost += 10;
  } else if (newPizza.size === "medium") {
    newPizza.cost += 14;
  } else if (newPizza.size === "large") {
    newPizza.cost += 18;
  } else if (newPizza.size === "giant") {
    newPizza.cost += 22
  }
  toppingsCost = toppingsArray.length;
  newPizza.cost += toppingsCost;
}


// Front-end logic
$(document).ready(function() {
  $("#submit").click(function(event) {
    event.preventDefault();
    toppingsArray = [];

    $("input:checkbox[name=topping]:checked").each(function() {
      var allToppings = $(this).val();
      toppingsArray.push(allToppings);
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
