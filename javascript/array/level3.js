//given the array, calculate sum of odd numbers using reduce method
const arr =[4,2,3,5]

 arr.reduce((sum, item, id)=>{
    if(item%2 !== 0){
        console.log(item)
    }
}, 0)