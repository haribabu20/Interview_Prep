// 🔥 2️⃣ Check if a given number is prime.

const isPrime = (n) => {

  if(n<2) return false;       // Prime numbers are always > 1

  for(let i=2; i<n; i++){     // if i<=n, then output will not come as expected.
    if(n % i === 0){
      return false;
    }
  }

  return true;
}

console.log(isPrime(5));    // true
console.log(isPrime(10));   // false
console.log(isPrime(7));    // true
console.log(isPrime(15));   // false