describe('findTriangle', function() {
  it('takes a 1, 1, 1, and returns "Equilateral"', function() {
    expect(findTriangle(1,1,1)).to.equal("Equilateral");
  });

  it('takes a 5, 5, 5, and returns "Equilateral"', function() {
    expect(findTriangle(5,5,5)).to.equal("Equilateral");
  });

  it('takes a 2, 2, 1, and returns "Isosceles"', function() {
    expect(findTriangle(2,2,1)).to.equal("Isosceles");
  });

  it('takes a 3, 3, 1, and returns "Isosceles"', function() {
    expect(findTriangle(3,3,1)).to.equal("Isosceles");
  });

  it('takes a 2, 3, 2, and returns "Isosceles"', function() {
    expect(findTriangle(2,3,2)).to.equal("Isosceles");
  });

  it('takes a 3, 2, 4, and returns "Scalene"', function() {
    expect(findTriangle(3,2,4)).to.equal("Scalene");
  });

  it('takes a 5, 4, 3, and returns "Scalene"', function() {
    expect(findTriangle(5,4,3)).to.equal("Scalene");
  });

  it('takes a 2, 2, 8, and returns "Invalid"', function() {
    expect(findTriangle(2,2,8)).to.equal("Invalid");
  });

  it('takes a 3, 5, 8, and returns "Invalid"', function() {
    expect(findTriangle(3,5,8)).to.equal("Invalid");
  });
});
