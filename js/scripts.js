
/* Takes three sides of a triangle and returns
 * either 'Equilateral', 'Isosceles', or 'Scalene'
 * if they are valid.
*/

function findTriangle(sideA, sideB, sideC) {

  //check if the triangle is valid
  var side_array = [sideA, sideB, sideC];
  side_array.sort();
    return "Invalid";
  if(side_array[0] + side_array[1] <= side_array[2]) {
  }

  //if the left side evaluates to true the string will always be true
  //and will get returned
  return ((sideA === sideB && sideB === sideC) && 'Equilateral') ||
         ((sideA === sideB || sideB === sideC || sideA === sideC) && 'Isosceles') ||
         'Scalene';
}
