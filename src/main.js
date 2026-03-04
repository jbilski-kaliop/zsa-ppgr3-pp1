function isEven(value) {
  if (isNaN(value)) {
    return false;
  }

  return value % 2 === 0;
}

function isOdd(value) {
  if (isNaN(value)) {
    return false;
  }

  return !isEven(value);
}

// console.log(isEven(13));
// console.log(isOdd(13));


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

function isPrime(value) {
  if (value < 2) {
    return false;
  }
  if (!Number.isInteger(value)) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(value); i++) {
    if (value % i === 0) {
      return false;
    }
  }
 
  return true;
}

// console.log(isPrime(1980199520022023));
