// 🔥 3️⃣ Generate the Fibonacci sequence up to a given number of terms.


// Method 1 - loop
const fibonacciSeries = (n) => {
  let series = [0,1];
  for(i=2;i<n;i++){
    series[i] = series[i-1] + series[i-2];
  }
  return series
}

console.log(fibonacciSeries(10)); //0, 1, 1, 2, 3, 5, 8, 13, 21, ... this is the true fibonacci series !!




// Method 2 - recursion ---->>>>>> Important

const fibonacciSeries1 = (n) => {
  if(n === 1) return [0];         // For n=1, only [0]
  if(n === 2) return [0, 1];      // For n=2, only [0,1]

  let series = fibonacciSeries1(n-1);  // Recursive Call
  series.push(series[series.length-1] + series[series.length-2]);
  return series;
}

console.log(fibonacciSeries1(5));
