export default function isEven(value) {
  if (isNaN(value)) {
    return false;
  }

  return value % 2 === 0;
}
