function hasTargetSum(array, target) {
 //n step
  for(let i = 0; i < array.length; i++){
    
    const compliment = target - array[i];
    for(let j = i + 1; j < array.length; j++){
    //n * n step
     if(array[j] === compliment)
      return true;
     
    } 
     
     return false
  }
}

/* 
  Write the Big O time complexity of your function here
  Runtime: 0(n^2)
  Space: 0(n)
*/

/* 
  Add your pseudocode here
  hasTargetSum([3, 8, 12, 4, 11, 7], 10))
  iterate over each number in the array
    for the current number identify a compliment that adds up to the target (comp = target - num)
    iterate over the rest of the array
     check if any number is our compliment
     if so return true
     if i reach end return false

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([19, 22, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
