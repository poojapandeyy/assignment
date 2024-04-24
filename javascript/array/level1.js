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

//Q4 Remove the last element from the array and log the modified array to the console
let i=0
for(i=0; i<arr.length-1 ; i++){
    console.log(arr[i]) 
}


// Q5 Check if all elements in the num  are even. Log "All even" or "Not all even" accordingly.
const num = [6,4,2,8,10,12]

console.log("All even num are")
let a=0
for(a=0; a<num.length; a++){
if(num[a]%2 == 0){
  console.log(num[a])
}
}

// Find the index of a specific element in the array. Log the index to the console. 
//expected output: 3

const allNum = [3, 5, 2, 8, 5];
const searchElement = 2;

let b=0

for(b=0; b<allNum.length; b++){
  if(allNum[b]==searchElement){
    console.log("The index of the element in an array is" + "\n" + b)
  }
}

