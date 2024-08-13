// 加法示例
const num1 = 1;
const num2 = 2;
const addResult1 = num1 + num2;
const addResult2 = num1 + (num2 + 3);
console.log(addResult1); // 3
console.log(addResult2); // 6

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arrSumResult = arr1 + arr2;
console.log(arrSumResult); // 5, 7, 9

// 乘法示例
const mulResult = num1 * num2;
console.log(mulResult); // 2

const arrMulResult = arr1 * arr2;
const arrMulResult2 = arr1 * 2;
const arrMulResult3 = arr1 * [2];
console.log(arrMulResult); // 4, 10, 18
console.log(arrMulResult2); // 2, 4, 6
console.log(arrMulResult3); // 2, 2, 3

// 复合运算
const result = ([num1 + num2 * 2] + arr1) * 2;
console.log(result); // 5
