const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it('unroll should return array', function() {
    const square = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];
    let unrolled = unroll(square);
    expect(Array.isArray(unrolled)).toBe(true);
  });
  
  it('unrolled should have same number of items as square array', () => {
    const square = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];
    
    let unrolled = unroll(square);
    const squareItems = square[0].length * square.length
    
    expect(unrolled.length).toEqual(squareItems);
  });
  
  it('unrolled should return numbers from array list in shape of square', () => {
    const smallerSquare = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"]
    ];
      const expectedReturn = ["a", "b", "c", "f", "i", "h", "g", "d", "e"];
      let unrolled = unroll(smallerSquare);
      expect(unrolled).toEqual(expectedReturn);
  });

});

