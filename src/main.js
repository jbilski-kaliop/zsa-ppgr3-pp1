function isEven(value) {
  return value % 2 === 0;
}

function isOdd(value) {
  return !isEven(value);
}

console.log(isEven(13));
console.log(isOdd(13));
