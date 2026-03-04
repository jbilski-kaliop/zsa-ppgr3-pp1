function isEven(value) {
  return value % 2 === 0;
}

function isOdd(value) {
  return !isEven(value);
}

console.log(isEven(13));
console.log(isOdd(13));


function max3(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > c) {
    return b;
  } else {
    return c;
  }
}

console.log(max3(15, 3, 5));
