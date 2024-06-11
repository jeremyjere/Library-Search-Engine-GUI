"use strict"
//This program: Mike's Library, was completed by Anish,Jeremy, and Connor
//Teacher:Mr.Ma
//Class: ICS4U

const data = loadJSON('./DO_NOT_TOUCH/data.json'); //Don't delete this line. All your data is here. It does take a few seconds for Replit to load the data because it's so large.

/* Pre Conditions: 
- Data must be a list
- Data elements must be organized by type

Post Conditions:
-unsortedData must be a 2D array filled with Data elements
-must return a seperate array to Data, which contains Data elements
*/
//takes the data and creating a parrallel array
function makeParallel() { //O(n)
  let unsortedData = [];
  const ARRLENGTH = 100000;
  for (let i = 0; i < ARRLENGTH; i++) { //inserting data
    let last = data.lastName[i];
    if(last.charCodeAt(0)>=97) //checks for not caps
    {
     last=last.charAt(0).toUpperCase()+last.substring(1);//if not caps, will make first letter caps
    }
    unsortedData[i] = [data.firstName[i], last, data.gender[i], data.guid[i], data.bookName[i], data.references[i]];
  }
  return unsortedData;
}

const unsortedData = makeParallel();
