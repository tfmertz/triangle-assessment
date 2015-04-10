
/* Takes three sides of a triangle and returns
 * either 'Equilateral', 'Isosceles', or 'Scalene'
 * if they are valid. If invalid, it returns 'Invalid'
*/

function findTriangle(sideA, sideB, sideC) {

  //check if the triangle is valid
  var side_array = [sideA, sideB, sideC];

  //callback is used to fix the error where sort uses the string of a number
  //and since higher numbers as strings have lower unicode values they were
  //getting added in first
  side_array.sort(function(a, b) {
    return a - b;
  });
  //if the smallest sides are equal or less than the biggest it's not a valid triangle
  if(side_array[0] + side_array[1] <= side_array[2]) {
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

    if(result === "Invalid") {
      $("#triangle-invalid").text(result);
      $("#triangle-result").text("");
    } else {
      $("#triangle-result").text(result);
      $("#triangle-invalid").text("");
    }
    $("#result").show();

    $("#sideA").focus();

    event.preventDefault();
  });

});
