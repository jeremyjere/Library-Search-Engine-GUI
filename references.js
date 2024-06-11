/* Precontions:


Postconditions:
*/
//O(n)
function referenceMap(references = new Map()) {
  for (i = 0; i < 100000; i++) {
    references.set(unsortedData[i][3], `${unsortedData[i][1]} ${unsortedData[i][0]}`);//at the key: uid, the last name and firstnames will be saved as a string value
  }
  return references;
}

const references=referenceMap();

// O(n)
function getReferences(uids, referenceList = "") {
  for (i = 0; i < 10; i++) {
    // console.log(uids[i])
    // console.log(references.get(uids[i]))
    referenceList += `${references.get(uids[i])},`;// loads 10 strings in
  }
  return referenceList;
}
