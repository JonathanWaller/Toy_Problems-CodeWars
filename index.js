// This file is for all my toy problems

// 1. Write a function that multiplies a * b

// Solution:
function multiply(a, b) {
  return a * b;
}

// 2. Create a function (or write a script in Shell) that takes an integer as an argument and
// returns "Even" for even numbers or "Odd" for odd numbers.

// Solution:
function even_or_odd(number) {
  newNum = Math.abs(number);
  if (newNum % 2 == 0) {
    return "Even";
  } else if (newNum % 2 == 1) {
    return "Odd";
  }
}

// 3. Given an array of integers your solution should find the smallest integer.

Solution:
class SmallestIntegerFinder {
    findSmallestInt(args) {
      let myArr = 0;
      myArr = args[0];
      for(let i=1;i<args.length;i++){
        if(args[i]<myArr){
          myArr = args[i];
        }
      }
      return myArr;
    }
  }

  
