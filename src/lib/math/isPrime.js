export default function isPrime(value) {
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
