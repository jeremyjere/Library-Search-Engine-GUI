//to get rid of stack overflow create another function that runs and counts (within the bfs function using a variable like number of runs) the number of bfs's and then once it reaches 4k you if it does, it must return a queue for the other function to use as a parameter for bfs. the other function checks to see if bfs returns a number or a queue if its a number it exausts the while loop. Will do if we have time.

// O(1)
function mrca() {// initializes and preps the bfs to launch
  const uid1 = document.getElementById("UID1").value;
  const target = document.getElementById("UID2").value;
  let queue = new Queue();
  queue.enqueue([uid1]);
  const result = bfsOptimizer(target,queue);
  const mrcaDisplay = document.getElementById("displayMRCA");
  mrcaDisplay.innerHTML = `This took ${result} jumps`
}

f/* Precontions:
-Input is given as a target string
-queue is given  as a queue with an array inside

Postconditions:
-will return ammount of jumps to get from one person to another
*/
function bfsOptimizer(target,queue)//O(n)
{
  //this is in order to by stack call stack limitations. Will continue recalling bfs with same queue until target is reached
  let result = queue;
  while(typeof result !== 'number')
    {
      numberOfCalls =0;
      result = bfs(target,result);
    }
  return result;
}