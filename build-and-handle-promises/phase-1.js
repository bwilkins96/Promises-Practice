function stretch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("done stretching"));
    }, 1000);
  });
}

function runOnTreadmill() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("done running on treadmill"))
    }, 500);
  })
}

function liftWeights() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("done lifting weights"))
    }, 2000);
  })
}

function workout() {
  stretch()
    .then(st => runOnTreadmill())
    .then(tr => liftWeights())
    .then(lw => console.log("done working out"));
}

/*stretch()
    .then(runOnTreadmill)
    .then(liftWeights)
    .then(() => console.log("done working out"))
    .catch((err) => console.log(err)); */

/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out
