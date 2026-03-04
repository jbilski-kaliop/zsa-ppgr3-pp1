function isEven(value) {
  if (value % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function isOdd(value) {
  if (value % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(13));
console.log(isOdd(13));
