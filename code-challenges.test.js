// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

describe('greeter', () => {
  it("return hi, fox", () => {
    expect(greeter()).toEqual('hi, fox!')
  })
})

const greeter = () => {
  return 'hi, fox!'
}
//template test pass

// PASS  ./code-challenges.test.js
// greeter
//   ✓ return hi, fox

// Test Suites: 1 passed, 1 total


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

//I havent wrote a fibonacci func in a while. there is a way to write it tp produce the right outcome. I will need the formula. which is going to call back on it self of fibonacci(n-1) + fibonacci(n-2)
//this will return the answer with a single number input, We are looking for a return of the an array.
// create an empty array 
// do the fibonacci seq 
//then push into new array
// then return array

// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe('fibonacci', () => {
  it("returns an array that length containing the numbers of the Fibonacci sequence.", () => {

    expect(fibonacci(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonacci(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// fibonacci
// ✕ returns an array that length containing the numbers of the Fibonacci sequence. (1 ms)

// ● fibonacci › returns an array that length containing the numbers of the Fibonacci sequence.

// ReferenceError: fibonacci is not defined


// b) Create the function that makes the test pass.
//kk time to write a function that will make my test pass

// const fibonacci = (num) => {
// let newArr = []

// for(i=0;i< num;i++){
//  if(i <= 1){
//     newArr.push(i)
//   } else{
//     newArr.push(fibonacci(i -1) + fibonacci(i-2))
  
//   }
// }
 
//   return newArr
// }

const fibonacci = (num) => {
  let fib=[0,1]
      
      for(let i =1;i< num;i++){
     fib.push(fib[i]+ fib[i-1])
      }
       
        return fib.slice(1)
      }
//this was harder than I thought but here is my best shot at it to get it to pass..
// fibonacci
// ✓ returns an array that length containing the numbers of the Fibonacci sequence.

// Test Suites: 1 passed, 1 total

// --------------------2) Create a function that takes in an object and returns an array of the numbers sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

describe('valueSort', () => {
  it("takes in an object and returns an array of the numbers sorted from least to greatest.", () => {

    expect(valueSort(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(valueSort(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})

// b) Create the function that makes the test pass.

//The functon will take in an object
//I will have to access the each value in the object. 
//Then I will push each value in to a new array
// Then sort the values from lowest from highest
// Then return the new arr with the values

const valueSort = (obj) => {
  let newArr = []
  console.log(obj)
  newArr.push(Object.values(obj))
  console.log(newArr)
  newArr[0].sort(function(a,b) {return a-b})
  return newArr[0]
}

// valueSort
// ✓ takes in an object and returns an array of the numbers sorted from least to greatest. (14 ms)

// Test Suites: 1 passed, 1 total


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

describe('sumOfArr', () => {
  it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {

    expect(sumOfArr(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(sumOfArr(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(sumOfArr(accountTransactions3)).toEqual([])
  })
})
// ● sumOfArr › takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// ReferenceError: sumOfArr is not defined

// b) Create the function that makes the test pass.

//I have to have a func that will take in an array
// I have to set up an empty arry
// One of the conditions is to return an empty arr is an empty arr is passed through, I can do that with a conditional statement if(arr === []){ return newArr}
// Then I will have to make a for loop and add eacch item in the array with the next item in the arry and push them to the new array
// Then return the new array

const sumOfArr = (arr) => {
  let newArr = []

  if(arr === []){
    return newArr
  } else {
let num = 0
    for(let i = 0; i < arr.length ; i++){
      
      num += arr[i]
      newArr.push(num)
    }
    return newArr
  }

}
// sumOfArr
// ✓ takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// Test Suites: 1 passed, 1 total

//great everything worked as expected =)