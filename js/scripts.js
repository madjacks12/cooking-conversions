
//Business (or back-end) logic:

var cupsToOz = function(num1) {
  return num1 * 8;
};

var galToLit = function(num2) {
  return num2 * 3.78541;
};

var spoonToCup = function(num3) {
  return num3 / 16;
};

// UI

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var result = cupsToOz(number1) + " ounces";
    $("#output1").text(result);  });

  $("form#addB").submit(function(event) {
    event.preventDefault();
    var number2 = parseInt($("#add2").val());
    var result2 = galToLit(number2) + " liters";
    $("#output2").text(result2);  });

  $("form#addC").submit(function(event) {
    event.preventDefault();
    var number3 = parseInt($("#add3").val());
    var result3 = spoonToCup(number3) + " tablespoons";
    $("#output3").text(result3);  });
});
