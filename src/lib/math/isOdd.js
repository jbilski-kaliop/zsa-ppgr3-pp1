import isEven from "./isEven";

export default function isOdd(value) {
  if (isNaN(value)) {
    return false;
  }

  return !isEven(value);
}
