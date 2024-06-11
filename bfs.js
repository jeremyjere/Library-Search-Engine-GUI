let numberOfCalls = 0;

function referenceMap2(references = new Map())//takes a UID
{
  for (i = 0; i < 100000; i++) {//O(n)
    references.set(unsortedData[i][3], unsortedData[i][5])
  }
  return references
}
const findWithUid = referenceMap2();

/* Precontions:
-Input is given in bfs optimizer as a target string
-queue is given in bfs optimizer as a queue with an array inside

Postconditions:
-will return ammount of jumps to get from one person to another
*/
function bfs(target, queue, visited = new Set()) {

  if (queue.length === 0) {
    return null;
  }
  const firstPackage = queue.dequeue();
  const currentUid = firstPackage[firstPackage.length - 1];

  //base case
  if (currentUid === target) {
    return firstPackage.length; //returns jumps
  }
  visited.add(currentUid);
  for (let i = 0; i < 10; i++) {
    let package = findWithUid.get(currentUid)[i]
    if (!(visited.has(package))) {// if does not have details of a person, enqueues
      queue.enqueue([...firstPackage, package]);
    }
  }
  numberOfCalls++; //used to optimize the MRCA to go beyond 4 jumps
  if(numberOfCalls > 4000)
  {
    return queue;
  }
  return bfs(target, queue, visited);
}
