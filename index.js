function hasTargetSum(arr, target) {
  const seen = new Set();
  for (const num of arr) {
    const difference = target - num;
    if (seen.has(difference)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
Initialize an empty set to store seen numbers.
For each number in the array:
Calculate the difference between the target and the current number.
Check if the difference is in the set of seen numbers. If it is, return true.
Otherwise, add the current number to the set of seen numbers.
If the loop completes without finding a pair, return false.*/

/*
  The hasTargetSum function is designed to determine if there exists a pair of numbers in the input array that adds up to a given target value.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
