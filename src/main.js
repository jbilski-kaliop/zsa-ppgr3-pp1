import isEven from "./lib/math/isEven";
import isOdd from './lib/math/isOdd';
import isPrime from './lib/math/isPrime';

// console.log(isEven(13));
// console.log(isOdd(13));

const potentialPrime = 13;
// const potentialPrime = 1980199520022023;
const isPrimePart = isPrime(potentialPrime) ? '' : ' not';
console.log(`Value ${potentialPrime} is${isPrimePart} a prime number`);
