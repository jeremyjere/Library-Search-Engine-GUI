/* Precontions:
-Left must be an array
-Right must be an array
-Arr must be an array

Postconditions:
-Arr must be returned as an sorted array 
*/
//O(n)
function merge(left, right, arr, n) {
  // i and j are pointers
  let i = 0;
  let j = 0;
  //
  for (let k = 0; k < arr.length; k++) {
    if (i >= left.length) //If left is empty
    {
      arr[k] = right[j++]; //Dump in the values from right
    } else if (j >= right.length) //If right is empty
    {
      arr[k] = left[i++]; //Dump in the values from left
    } else if (left[i][n] < right[j][n]) {
      arr[k] = left[i++];
    } else {
      arr[k] = right[j++];
    }
  }
  return arr;
}
/* Precontions:  
-newArr must be the Data given in a parallel array
-n>=0 since it is the index

Postconditions:
-returns a variable with the merge sortedData
*/
function mergeSort(newArr, n) {//O(nlogn)
  if (newArr.length <= 1) {
    return newArr;
  }
  let mid = Math.floor(newArr.length / 2);
  let left = mergeSort(slice(newArr, 0, mid), n);
  let right = mergeSort(slice(newArr, mid), n);
  return merge(left, right, newArr, n);
}

// assigning the sorted arrays to a variable
const sortedByFirst = mergeSort(makeParallel(), 0);
const sortedByLast = mergeSort(makeParallel(), 1);
const sortedByGender = mergeSort(makeParallel(), 2);
const sortedByUID = mergeSort(makeParallel(), 3);
const sortedByTitle = mergeSort(makeParallel(), 4);

