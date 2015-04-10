
/* Takes three sides of a triangle and returns
 * either 'Equilateral', 'Isosceles', or 'Scalene'
 * if they are valid. If invalid, it returns 'Invalid'
*/

function findTriangle(sideA, sideB, sideC) {

  //check if the triangle is valid
  var side_array = [sideA, sideB, sideC];
  side_array.sort();
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

  $("#calculate").submit(function(event) {


  });

});
