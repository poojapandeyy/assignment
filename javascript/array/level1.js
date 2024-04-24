const arr = [3,5,2]
//Q1 calculate length of array and console log
//expected output is 3

console.log(arr.length) //finding out the length of array

//Q2 reverse the array and console log
//expected output [2,5,3]
const rev = [...arr].reverse()  // ... to copy the original array and then make reverse of copied array
console.log(rev)

///Q3 join the array and console log
// expected output 352

const join = arr.join('')
console.log(join)