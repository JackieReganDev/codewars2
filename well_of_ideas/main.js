// For every good kata idea there seem to be quite a few bad ones!
// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){
    let counter = 0
    // for of loop. iterates through array elements to check for conditions; "word" can be anything, it refers to the elements value
    for(const word of x){
      if(word === 'good') counter = counter + 1
    }
    if( counter === 1 || counter === 2) return "Publish!"
    if (counter > 2) return "I smell a series!"
    return "Fail!"
  }