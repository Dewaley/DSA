// Summation of all numbers up to n

const summation = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

/*
    Time comlexity  of summation() => O(n)
*/

//Factorial of the number n = n!

const factorial = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
};

/*
    Time comlexity  of factorial() => O(n)
*/

//Is number n a prime number

const isPrime = (n) => {
  if (n > 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

/*
    Time comlexity  of isPrime() => O(n)
*/

const isPrime2 = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

/*
    Time comlexity  of isPrime2() => O(√ n)
*/

// Time complexity of isPrime2 is  better than isPrime

// Is number n a power of two

const isPowerOfTwo = (n) => {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
};

/*
    Time comlexity  of isPowerOfTwo() => O(log n)
*/

const isPowerOfTwoII = (n) => {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
};

/*
    Time comlexity  of isPowerOfTwoII() => O(1)
    Time complexity of isPowerOfTwoII is  better than isPowerOfTwo
*/

// Fibonacci sequence of a number n
/*
Fibonacci sequence of 1 => [0, 1]
Fibonacci sequence of 2 => [0, 1,1]
Fibonacci sequence of 3 => [0, 1,1,2]
Fibonacci sequence of 4 => [0,1,1,2,3]

The fibonacci sequence works such that every number is a sum of the two preceding numbers
Take the Fib of 4 for instance, 
it starts with the 1st iteration [0,1]
then goes to ( 1 + 0 = 1 ) - 2nd iteration [0,1,1] 
then ( 1 + 1 = 2 ) - 3rd iteration [0,1,1,2] 
lastly ( 2 + 1 = 3 ) - 4th iteration [0,1,1,2,3]
*/

const fibonacci = (n) => {
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};

/*
    Time comlexity  of fibonacci() => O(n)
*/
