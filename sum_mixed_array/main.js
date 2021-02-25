// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

function sumMix(x){
    let ans = 0
    for( let n of x){
      ans += Number(n)
    }
      return ans
    }

    //reduce method
    function sumMix(x){
        return x.reduce((s,x)=>s+ +x,0);
       }