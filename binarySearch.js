/*Pre conditions: 
sortType must be a 2D array, index must be defined and above 0,
index must be a user chosen filter
target must be the user input

Post conditions: 
returns an array with a list of the occurances of target
If target does not exist, returns null
*/

function binarySearch(sortType, index, target, low = 0, high = 99999) {//O(log n)
  let i = 1;
  let j = 1;
  const instances = [null]; //Stores the instances of duplicates
  if (low > high) {//Binary Base Case
    if (sortType[low][index].toUpperCase() != target) {// Ensuring the input value is present in the array
      return null;
    }
    instances[0] = sortType[low];
    while (target == sortType[low + i][index].toUpperCase()) {  //Checking the indexes in front of it for duplicates
      instances[i] = sortType[low + i];
      i++;
    }
    if ((low - j) > 0) {
      while (target == sortType[low - j][index].toUpperCase()) {  //Checking the indexes before it for duplicates
        instances[i + j] = sortType[low - j];
      }
    }
    mergeSort(instances, 1);
    return instances;
  }
  
  let mid = Math.floor((high + low) / 2);
  if ((sortType[mid][index].toUpperCase()) >= target) {
    return binarySearch(sortType, index, target, low, mid - 1); //Recurse
  } else {
    return binarySearch(sortType, index, target, mid + 1, high);
  }
}
