// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// array.forEach(element => { 
// }); example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


function squareSum(numbers){
    return numbers.reduce((acc,c) => acc + c**2, 0)
  }

  //short way
  const squareSum = numbers => numbers.reduce((acc,c) => acc + c**2, 0)