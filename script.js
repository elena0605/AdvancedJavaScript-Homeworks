// generate array
let array = [];
let array1 = [];
let array2 = [];
for (let i = 1; i <= 1000; i++) {
    if (i % 3 === 0) {
        array.push(i)
    }
    else if (i % 4 === 0) {
        array1.push(i)
    }
    else if (i % 10 === 1) {
        array2.push(i)
    }
}
console.log(array)
console.log(array1)
console.log(array2)

// Clean arrays

function arrayOfStrings(array) {
    let newArr = [];
    for (let i = 0; i <= array.length; i++) {
        if (typeof array[i] === 'string') {
            newArr.push(array[i])
        }
    }
    return newArr
}

function arrayOfNumbers(array) {
    let newArr = [];
    for (let i = 0; i <= array.length; i++) {
        if (typeof array[i] === 'number') {
            newArr.push(array[i])
        }
    }
    return newArr
}

function arrayOfTruthValues(array) {
    let newArr = [];
    for (let i = 0; i <= array.length; i++) {
        if (array[i]) {
            newArr.push(array[i])
        }
    }
    return newArr
}
let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];

let newArray = arrayOfNumbers(test);
console.log(newArray)

// Random color page 