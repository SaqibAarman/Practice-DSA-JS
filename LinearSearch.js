/* LINEAR SEARCH ALGO */
// USED FOR UNSORTED INPUTS

function linearSearch(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
  return -1;
}

let arr = [10, 5, 3, 2, 1, 45];

console.log(linearSearch(arr, 1)); // O/p ---> 4

console.log(linearSearch(arr, 5)); // O/p ---> 1

console.log(linearSearch(arr, 100)); // O/p ---> -1

console.log(linearSearch(arr, 10)); // O/p ---> 0

// Time Complexity ---> O(n)
