describe('findTriangle', function() {
  it('takes a 1, 1, 1, and returns "Equilateral"', function() {
    expect(findTriangle(1,1,1)).to.equal("Equilateral");
  });

  it('takes a 5, 5, 5, and returns "Equilateral"', function() {
    expect(findTriangle(5,5,5)).to.equal("Equilateral");
  });

  it('takes a 2, 1, 1, and returns "Isosceles"', function() {
    expect(findTriangle(2,1,1)).to.equal("Isosceles");
  });

  it('takes a 2, 2, 1, and returns "Isosceles"', function() {
    expect(findTriangle(2,2,1)).to.equal("Isosceles");
  });

  it('takes a 1, 2, 1, and returns "Isosceles"', function() {
    expect(findTriangle(1,2,1)).to.equal("Isosceles");
  });

});
