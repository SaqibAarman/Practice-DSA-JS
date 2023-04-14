function segregateArray(array) {
  let count = 0;
  array.forEach((element) => {
    element === 0 && count++;
  }); // O(n)
  console.log(count,'=');

  for (let i = 0; i < count; i++) {
    array[i] = 0;
  } //O(count)

  for (let i = count; i < array.length; i++) {
    array[i] = 1;
  } //O(n - count)

  return array;
}

// Time Complexity ==>  O(n) + O(count) + O( n - count)
//                     ~ O(n)

//console.log(segregateArray([0, 1, 1, 1, 0, 0, 1, 1, 0, 0]));
console.log(segregateArray([0, 1, 1, 1, 0]));

