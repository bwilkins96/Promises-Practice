function stretch(time) {
  time -= 1000;

  return new Promise((resolve, reject) => {
    if (time < 0) {reject("Error: you dont have enough time to stretch")}
    else {
      setTimeout(() => {
        console.log("done stretching");
        resolve(time);
      }, 1000);
    };
  });
}

function runOnTreadmill(time) {
  time -= 500;

  return new Promise((resolve, reject) => {
    if (time < 0) {reject("Error: you dont have enough time to stretch")}
    else {
      setTimeout(() => {
        console.log("done running on the treadmill");
        resolve(time);
      }, 500);
    };
  });
}

function liftWeights(time) {
  time -= 2000;

  return new Promise((resolve, reject) => {
    if (time < 0) {reject("Error: you dont have enough time to stretch")}
    else {
      setTimeout(() => {
        console.log("done lifting weights");
        resolve(time);
      }, 2000);
    };
  });
}

function workout(time) {
  stretch(time)
  .then(st => runOnTreadmill(st))
  .then(tr => liftWeights(tr))
  .then(lw => console.log("done working out"))
  .catch(error => console.error(error));
}

/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/


 //workout(500);
  // should print out the following:
    // Error:  you dont have enough time to stretch


 //workout(1000);
  // should print out the following:
    // done stretching
    // Error:  you dont have enough time to run on treadmill


 //workout(2000);
  // should print out the following:
    // done stretching
    // done running on treadmill
    // Error:  you dont have enough time to lift weights


 //workout(4000);
  // should print out the following:
  //   done stretching
  //   done running on treadmill
  //   done lifting weights
  //   done working out with 0.5 seconds left
