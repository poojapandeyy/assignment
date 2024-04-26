const arr =  [3,5,2]
//console.log the maximum number of an array
//expectedd output 5

let i=0
let max=0
for(i=0; i<arr.length; i++){
  if(arr[i]>max){
    max = arr[i]
  }
}

console.log(max)

//Q2 Remove a specific element 2 from the array. Log the modified array to the console.
// expected output: [3,5]

const elementToRemove = 2;
// let j=0
// for(j=0; j<arr.length; j++){
//   if(arr[j]!==elementToRemove){
//     console.log( arr[j])
//   }
// }
arr.forEach((item)=>{
  if(item!== elementToRemove)
  console.log(item)
})


//Q3 Multiply each element of the array by a constant value 5 and log the modified array to the console.
//expected output [15,10]


//find intersection (common elements) of arr and arr2
//expected output: [5]
const arr2 = [5,21,32]

