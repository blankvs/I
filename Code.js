//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x){
    let res = ''
    
    for (let i = 0; i < x.length; i++) {
      if (x[i] < 5) {
        res += 0
      } else {
        res += 1
      }
    }
    return res
  }

  //Build a function that returns an array of integers from n to 1 where n>0.

  const reverseSeq = n => {
  
    let arr = []
    
    for (let i = n; i > 0; i--) {
      arr.push(i)
    }
    return arr
  };

//Your task is to create a function that does four basic mathematical operations.
//The function should take three arguments - operation(string/char), value1(number), value2(number).
//The function should return result of numbers after applying the chosen operation.

  function basicOp(operation, value1, value2)
{
  if (operation == '+')
    return value1 + value2;
  if (operation == '-')
    return value1 - value2;
  if (operation =='*')
    return value1 * value2; 
  if (operation == '/')
    return value1 / value2;
}

//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(array) {
   
  let newArr = []
  
  for ( let i = 0; i < array.length; i++) {
    newArr.push(-array[i])  
  }
  return newArr
}

//Given an array of integers, return a new array with each value doubled.

function maps(x){
   
  let newArr = []
  
  for ( let i = 0; i < x.length; i++ ) {
    newArr.push(x[i] * 2)
  }
  return newArr
}

//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    
  if ( number % 2 === 0) {
    return number * 8
  } else {
    return number * 9
  }
  
}

//The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

function century(year) {
  return Math.ceil(year / 100)
}

//Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  
  if (number % 2 === 0) {
    return "Even"
  } else {
    return "Odd"
  }
}

//A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

function hero(bullets, dragons){
  if ( bullets / 2 >= dragons) {
    return true
  } else {
    return false
  }
}

//Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
  
  let string = []
  
  for ( let i = 1; i <= num; i++ ) {
    string += `${i} sheep...`
  }
  return string
}