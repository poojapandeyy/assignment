//Q1 create two constants, add them assign to a new constants
const x=10
const y=20
const sum=x+y
console.log(sum)


//Check below code, output should be false by comparing. console.log the answer
const a = 10
const b = '10'
console.log(a === b)

// generate a random number between 0 and 5, if it is lesser than 3,
//console.log "lesser than 3" else "Greater"
// hint  Math.random

const randomNum = Math.random()*6
const roundOffVal = Math.floor(randomNum)
if (roundOffVal<3){
    console.log(roundOffVal + "is less than 3")
}else if(roundOffVal === 3){
    console.log(roundOffVal + "is equal to 3")
}
else{
    console.log(roundOffVal + "is greater than 3")
}


