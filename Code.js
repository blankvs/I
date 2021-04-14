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