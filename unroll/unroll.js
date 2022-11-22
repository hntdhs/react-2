function unroll(square) {
    const squareArray = [...square]
    const unrolled = []

    while (squareArray.length) {
        console.log(unrolled, squareArray)
        const topRow = squareArray.shift(); //shift is like pop from the beginning of an array
        topRow.forEach(i => unrolled.push(i)) //loop over each item in the top row add to unroll
        if (squareArray.length == 0) { //if the number of rows is odd, then after we finish off the first row, we have nothing left
            break
        }
        squareArray.forEach(i => unrolled.push(i.pop())) // take the right column and add to unroll
        const bottomRow = squareArray.pop().reverse() //get bottom row
        bottomRow.forEach(i => unrolled.push(i)) //push to unrolled
        const leftColumn = squareArray.map(i => i.shift()).reverse() //get left column
        leftColumn.forEach(i => unrolled.push(i))         //push left column
    }
    return unrolled

}

const square = [
    [1, 2, 3, 4, 5],
    [5, 6, 7, 8, 8],
    [9, 10, 11, 12, 12],
    [13, 14, 15, 16, 16],
    [17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26],
  ];
unrolled = unroll(square)
console.log(unrolled)

module.exports = unroll;

// recursive function ?
// function unroll(square) {
//     const unrolled = [];
//     return unrolled;

    // shift square[0][0] and push to unrolled, if square[0].length > 0, shift square[0][0] and push to unrolled, if square[0].length = 0, pop square[1] and push to unrolled, and pop on last number in every array until there are no more arrays below. 
    // Keep popping the last number in bottom array until it's empty. 
    // Shift on above array, and array above that until there's no arrays above that aren't empty. 
    // Then proceed like we started - shift all array items in that array until it's empty, then get the last array item in all arrays below until it gets to the bottom empty array, and go in reverse popping array items until that array is empty too. Then get first item in arrays above until it gets to an empty array. Then go across, back down, etc, until that array of arrays that made up the square is nothing but empty arrays.
    // 
