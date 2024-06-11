 /* Precontions:
-Arr is the needed array
- Start and end mark are the values needed to know where to slice
=Start <= End
Postconditions:
-returns the original array without the values you want
*/
//O(n)
function slice(arr, start, end) {  //arr is given array, start is the start of the slice, end is end of the slice
  let result = [];  // result is the result returned after being sliced
  let from = Math.max(start, 0);// takes the largest value 
  let to = Math.min(end);

  if ((!end) || (end > arr.length)) {
    for (let i = from; i < arr.length; i++) {
      result[result.length]=arr[i];
    }
  } else {
    for (let i = from; i < to; i++) {
      result[result.length]=arr[i];
    }
  }
  return result;
}

