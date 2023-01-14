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
// let code = "";
// function generateColor(){
//     const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    
//     for(let i=0; i<6; i++){
//      code += hexArray[Math.floor(Math.random()*16)];
//     }
//     console.log(code)
//     return `#${code}`
//    }

// window.addEventListener("load", () => {
//     document.body.style.backgroundColor = generateColor();
//     document.body.innerText = code;
//   });

// Title Generator 
let inputColor =  document.getElementById('color').value;
let inputFontSize = document.getElementById('fontSize').value;
let inputText = document.getElementById('text').value;
let button = document.getElementsByTagName('button');

button.addEventListener('click', function (){
    document.body.innerHTML = "<h1>new element</h1>";
})