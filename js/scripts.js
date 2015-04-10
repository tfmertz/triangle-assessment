
/* Takes three sides of a triangle and returns
 * either 'Equilateral', 'Isosceles', or 'Scalene'
 * if they are valid. If invalid, it returns 'Invalid' or 'Line'
*/

function findTriangle(sideA, sideB, sideC) {

  //store our sides for sorting
  var side_array = [sideA, sideB, sideC];
  var valid = true;

  //check that each side is actually a number
  side_array.forEach(function(side) {
    if(side.toString().search(/[^0-9]/) !== -1) {
      valid = false;
    }
  });

  //callback is used to fix the error where sort uses the string of a number
  //and since higher numbers as strings have lower unicode values they were
  //getting added in first
  side_array.sort(function(a, b) {
    return a - b;
  });
  //if the smallest sides are equal or less than the biggest it's not a valid triangle
  if(side_array[0] + side_array[1] < side_array[2]) {
    valid = false;
  }
  else if(side_array[0] + side_array[1] == side_array[2]) {
      //for flavor text, sacrifices must be made
      return "Line";
  }

  if(!valid) {
    return "Invalid";
  }
  //if the left side evaluates to true the string will always be true
  //and will get returned
  return ((sideA === sideB && sideB === sideC) && 'Equilateral') ||
         ((sideA === sideB || sideB === sideC || sideA === sideC) && 'Isosceles') ||
         'Scalene';
}


$(document).ready(function() {

  $("#converter").submit(function(event) {

    var sideA = parseInt($("#sideA").val());
    var sideB = parseInt($("#sideB").val());
    var sideC = parseInt($("#sideC").val());

    var result = findTriangle(sideA, sideB, sideC);

    var invalidFlavor = ["What a doosy!", "Better luck next time.", "Time to practice some Maths."];
    var successFlavor = ["Nice Triangle!", "You might be the next Einstein.", "What a wiz!"]
    //make a random number for flavor
    var flavorNum = Math.floor((Math.random() * 3));
    var lineFlavor = "Yup, that\'s pretty much just a straight line. Slightly darker than normal, but still pretty liney.";

    if(result === "Invalid") {

      $("#triangle-invalid").text(result);
      $("#triangle-result").text("");
      $("#flavor").text(invalidFlavor[flavorNum]);
    } else if (result === "Line") {

      $("#triangle-invalid").text("a line...");
      $("#flavor").text(lineFlavor);
      $("#triangle-result").text("");
    } else {

      $("#triangle-result").text(result);
      $("#triangle-invalid").text("");
      $("#flavor").text(successFlavor[flavorNum]);
    }
    $("#result").show();

    $("#sideA").focus();

    event.preventDefault();
  });

});
