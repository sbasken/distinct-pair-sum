function distinctPairSum(arr, k) {
  const foundPairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (i !== j && arr[i]+arr[j]===k) {
        if (!foundPairs.find(pair => (pair[0] === arr[i] && pair[1] === arr[j]) || (pair[0] === arr[j] && pair[1] === arr[i]))) {
          foundPairs.push([arr[i], arr[j]]);
        }  
      }
    }
  }
  return foundPairs;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log("=>", distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log("=>", distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));
}

module.exports = distinctPairSum;

// Please add your pseudocode to this file
// And a written explanation of your solution
