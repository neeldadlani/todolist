function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  number_sqrt = Math.sqrt(sq)
  remainderOfsqrt = number_sqrt % 1;
  squareOfNumber = sq ** 2;
  remainderOfSquaredNumber = squareOfNumber % 1;

  // Find perfect square first

    if (remainderOfsqrt != 0) {
      return -1
    } else {
      return ((Math.floor(Math.sqrt(sq)) + 1) ** 2);
    }
};

console.log(findNextSquare(114));
