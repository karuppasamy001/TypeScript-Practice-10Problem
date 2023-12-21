"use strict";
function findFascination(num) {
    let value1 = String(num * 2);
    let value2 = String(num * 3);
    if (isUnique(value1 + value2 + String(num)) && (value1 + value2 + String(num)).length === 9)
        return true;
    else
        return false;
}
function isUnique(num) {
    const charSet = new Set();
    for (const char of num) {
        if (charSet.has(char)) {
            return false;
        }
        charSet.add(char);
    }
    return true;
}
const buttonForFascinating = document.getElementById("button");
const outputForFascinating = document.getElementById("output");
buttonForFascinating.addEventListener('click', () => {
    const inputField = document.getElementById("inputValue");
    if (isNaN(Number(inputField.value))) {
        alert("Please enter a valid number");
    }
    if (findFascination(parseInt(inputField.value)))
        outputForFascinating.innerHTML = "It is Fascinating Number";
    else
        outputForFascinating.innerHTML = "Not a Fascinating Number";
});
// function findFascination(num: number): boolean {
//     let i: number = 1
//     let value1: string
//     let value2: string
//     while (true) {
//         value1 = String(i * num)
//         let j: number = 1
//         let Flag: boolean = true
//         while(Flag) {
//             value2 = String(j * num)
//             if(isUnique(value1 + value2 + String(num)) && (value1 + value2 + String(num)).length === 9) return true
//             else if ((value1 + value2 + String(num)).length > 9 && j == 2) return false
//             else if ((value1 + value2 + String(num)).length > 9) Flag = false
//             j++
//         }
//         i++
//     }
// }
