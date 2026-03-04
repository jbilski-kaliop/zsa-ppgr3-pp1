export default function max() {
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
