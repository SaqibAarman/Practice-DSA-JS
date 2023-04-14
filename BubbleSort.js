/* BUBBLE SORT ALGO */
// USED FOR SORTED INPUTS

let arr = [20, 40, 10, 5, 30];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    console.log("After Iterations--->", i, arr);
  }
}

console.log(arr);

// Time Complexity ---> O(n^2)
