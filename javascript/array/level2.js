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