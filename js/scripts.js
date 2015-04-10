
/* Takes three sides of a triangle and returns
 * either 'Equilateral', 'Isosceles', or 'Scalene'
 * if they are valid.
*/

function findTriangle(sideA, sideB, sideC) {

  //if the left side evaluates to true the string will always be true
  //and will get returned
  return ((sideA === sideB && sideB === sideC) && 'Equilateral') ||
         ((sideA === sideB || sideB === sideC || sideA === sideC) && 'Isosceles');
}
