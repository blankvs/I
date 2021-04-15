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