// Remove a exclamation mark from the end of string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

function remove(s){
    return s[s.length-1] == '!' ? s.slice(0, s.length-1) : s;
  }

  //short way

  const remove = s => s[s.length-1] == '!' ? s.slice(0, s.length-1) : s;