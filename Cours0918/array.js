
// INIT ARRAY 1
const numbers = new Array(10)
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = Math.round(Math.random() * 100)
}
console.log("init array",numbers.toString())

// SORT ARRAY 1
numbers.sort((a, b) => a > b)
console.log("numbers sorted ",numbers.toString())
// REVERSE ARRAY 1
console.log("numbers reversed ",numbers.reverse().toString())

// INIT ARRAY 2
const numbers2 = new Array(10)
for (let i = 0; i < 10; i++) {
    numbers2[i] = Math.round(Math.random() * 100)
}
console.log("init array 2",numbers2.toString())


// INIT ARRAY 3
const numbers3 = new Array(10)

// SUM ARRAY 1 & 2
for (let i = 0; i < numbers.length; i++)
    numbers3[i] = numbers[i] + numbers2[i];

console.log("array1 + array2 : ",numbers3.toString())

