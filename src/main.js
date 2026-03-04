function isEven(value) {
  if (isNaN) {
    return false;
  }

  return value % 2 === 0;
}

function isOdd(value) {
  if (isNaN) {
    return false;
  }

  return !isEven(value);
}

console.log(isEven(13));
console.log(isOdd(13));


function max() {
  if (arguments.length > 0) {
    let value = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
      if (value < arguments[i]) {
        value = arguments[i];
      }
    }

    return value;
  } else {
    return NaN;
  }
}
