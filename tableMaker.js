
// Table maker retrieved from Dennis Ivy   
//https:www.youtube.com/watchv=XmdOZ5NSqb8&t=1s
function tableMaker(info, id, page) {//O(n)
  //info is the array of every author's info, id is the id of the table to insert the info, page is page number
  id.innerHTML = "";
  if (document.getElementById("upOrDown").value === "Descending") {
    //gets value of ascending and descending option and functions this descending loop if it is descending

    for (let i = 100009 - (page * 10); i >= 99989 - (page * 10); i--) {//length of whole array is 100,000 but starts at 0 so technically is 99,999. Since 1 is the minimum page, it would -10 at the start and miss 10 people, so I added 10 to 99,999 to equal i to combat  that
      //loop stops at page*10 -10 because it goes 10 elements further than the first, since the table is in 10 element intervals

      let row =//creates row that assigns the information of 1 person to each cell of a row, then repeats with a different person
        `<tr>
        <td>${info[i][0]}</td>
        <td>${info[i][1]}</td>
        <td>${info[i][2]}</td>
        <td>${info[i][3]}</td>
        <td>${info[i][4]}</td>
        <td>${info[i][5]}</td>
      </tr>`
      id.innerHTML += row;//adds to table
    }
  }
  else {
    for (let i = page * 10 - 10; i < page * 10; i++) {//loop for index.html and ascending table.html
      let row =
        `<tr>
          <td>${info[i][0]}</td>
          <td>${info[i][1]}</td>
          <td>${info[i][2]}</td>
          <td>${info[i][3]}</td>
          <td>${info[i][4]}</td>
          <td>${info[i][5]}</td>
        </tr>`
      id.innerHTML += row;
    }
  }
}
function createTableBySort() {//O(1)
  //called from button
  const pageNum = document.getElementById("pageNumTable").value
  const typeOfSort = document.getElementById("typeOfBox").value

  console.log(pageNum);
  console.log(typeOfSort);
  let sortType = null;

  if (typeOfSort === "First Name") {//Assigns typeOfSort to the sorted array it corresponds to
    sortType = sortedByFirst;
  }
  else if (typeOfSort === "Last Name") {
    sortType = sortedByLast;
  }
  else if (typeOfSort === "Gender") {
    sortType = sortedByGender;
  }
  else if (typeOfSort === "Unique Author ID") {
    sortType = sortedByUID;
  }
  else if (typeOfSort === "Book Title") {
    sortType = sortedByTitle;
  }
  tableMaker(sortType, document.getElementById("table"), pageNum);
  //uses retrived page number and assigned sorted array to make a table in table.html
}