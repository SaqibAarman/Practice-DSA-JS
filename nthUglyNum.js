function nthUglyNumber(n) {
  let uglyNumber = 0;
  let count = 1;
  while (n > count) {
    uglyNumber++;
    if (isUgly(uglyNumber)) count++;
  }
  return uglyNumber;
} // Returns true if 'num' is ugly number, else false
function isUgly(num) {
  if (num === 0) return false;
  // Followings are the divided by 2, 3 and 5 as
  // ugly number always included either of them
  while (num % 2 === 0) num /= 2;
  while (num % 3 === 0) num /= 3;
  while (num % 5 === 0) num /= 5;
  return num === 1;
}

console.log(nthUglyNumber(18));
