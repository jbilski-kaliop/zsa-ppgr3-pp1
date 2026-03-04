import { isPrime } from "./lib/math";

const potentialPrime = 13;
// const potentialPrime = 1980199520022023;
const isPrimePart = isPrime(potentialPrime) ? '' : ' not';
console.log(`Value ${potentialPrime} is${isPrimePart} a prime number`);
