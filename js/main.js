function checkNumber(num1, num2) {
  if (num1 == 20 || num2 == 20 || num1 + num2 <= 20) {
    return true;
  }
}

console.log(checkNumber(30, 10));
console.log(checkNumber(20, 10));
console.log(checkNumber(40, 10));
console.log(checkNumber(4, 20));
console.log(checkNumber(7, 7));
