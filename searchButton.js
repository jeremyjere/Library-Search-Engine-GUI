/* Precontions:
-Input is taken from html
-InputType is taken from html

Postconditions:
-returns the input type as a variable called index, which stores an integer
-returns input type as sort type, which stores the sorted data needed
*/
// O(n)
function searchButton() {
  const input = document.getElementById("inputBox").value.toUpperCase();
  const inputType = document.getElementById("typeBox").value;
  const pageNum = document.getElementById("pageNumIndex").value
  //Takes user input, type, and page number
  
  let index = 0;
  let sortType = null;
  if (inputType == "First Name") {//Assigns the inputType to the sorted array it corresponds to, as well as giving it an assigned number to be used for binary search
    index = 0;
    sortType = sortedByFirst;
  }
  else if (inputType == "Last Name") {
    index = 1;
    sortType = sortedByLast;
  }
  else if (inputType == "Gender") {
    index = 2;
    sortType = sortedByGender;
  }
  else if (inputType == "Unique Author ID") {
    index = 3;
    sortType = sortedByUID;
  }
  else if (inputType == "Book Title") {
    index = 4;
    sortType = sortedByTitle;
  }

  let t0 = performance.now();//records performance
  const result = binarySearch(sortType, index, input);
  let t1 = performance.now();
  let performanceTime = t1 - t0 + " Milliseconds";
  document.getElementById('time').innerHTML = performanceTime;
  if (result === null) {
    return window.alert("Item Does Not Exist");
  }
  resultcopy = [...result];
  for (let i = 0; i < result.length; i++) {
    resultcopy[i][5] = getReferences(result[i][5]);
  }// replaces the index 5 array filled with UID codes to a string of 10 Lname, Fnames. For all results.
  tableMaker(resultcopy, document.getElementById("indexTable"), pageNum);//creates a table on the index.html page using its variables
}
