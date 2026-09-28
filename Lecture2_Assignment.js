const prompt = require('prompt-sync')()
// Exercise 1
function staircase(){
    let step = ""
    for(let i = 1; i <= 7; i++){
        step += "#"
        console.log(step)
    }
}
// Exercise 2
function fizzBuzz(){
    for(let i = 1; i <= 100; i++){
        if(Number.isInteger(i/5/3)){
            console.log("FizzBuzz")
        }else if(Number.isInteger(i/3)){
            console.log("Fizz")
        }else if(Number.isInteger(i/5)){
            console.log("Buzz")
        }else{
            console.log(i)
        }
    }
}
// Exercise 3
function grid(size){
    for(let y = 1; y <= size; y++){
        let row = ""
        for(let x = 1; x <= size; x++){
            if(x%2 == y%2){
                row += " "
            }else{
                row += "#"
            }
        }
        console.log(row)
    }
}
// Exercise 4
function numListsAscending(){
    // All nums >= 1 and <= 50
    for(let i = 1; i <= 50; i++){
        console.log(i)
    }
    // All non negative nums < 25
    for(let i = 0; i < 25; i++){
        console.log(i)
    }
    // All non negative odd nums < 25
    for(let i = 0; i < 25; i++){
        if(i%2 == 1){
            console.log(i)
        }
    }
    // All non negative nums divisible by 3 and < 25
    for(let i = 0; i < 25; i++){
        if(Number.isInteger(i/3)){
            console.log(i)
        }
    }
    // The mults of 5 from >= 0 and <= 50
    for(let i = 0; i <= 50; i++){
        if(Number.isInteger(i/5)){
            console.log(i)
        }
    }
    // Multiples of 2 or 3, but not multiples of both 2 and 3, >= 1 and <= 50
    for(let i = 1; i <= 50; i++){
        if((Number.isInteger(i/2) || Number.isInteger(i/3)) && !Number.isInteger(i/6)){
            console.log(i)
        }
    }
        // Multiples of 2 and 3, but not multiples of 12, >= 1 and <= 100
    for(let i = 1; i <= 100; i++){
        if(Number.isInteger(i/2) && Number.isInteger(i/3) && !Number.isInteger(i/12)){
            console.log(i)
        }
    }
}
// Exercise 5
function numListsDescending(){
        // All nums >= 1 and <= 50
    for(let i = 50; i >= 1; i--){
        console.log(i)
    }
    // All non negative nums < 25
    for(let i = 24; i >= 0; i--){
        console.log(i)
    }
    // All non negative odd nums < 25
    for(let i = 24; i >= 0; i--){
        if(i%2 == 1){
            console.log(i)
        }
    }
    // All non negative nums divisible by 3 and < 25
    for(let i = 24; i >= 0; i--){
        if(Number.isInteger(i/3)){
            console.log(i)
        }
    }
    // The mults of 5 from >= 0 and <= 50
    for(let i = 50; i >= 0; i--){
        if(Number.isInteger(i/5)){
            console.log(i)
        }
    }
    // Multiples of 2 or 3, but not multiples of both 2 and 3, >= 1 and <= 50
    for(let i = 50; i >= 1; i--){
        if((Number.isInteger(i/2) || Number.isInteger(i/3)) && !Number.isInteger(i/6)){
            console.log(i)
        }
    }
        // Multiples of 2 and 3, but not multiples of 12, >= 1 and <= 100
    for(let i = 100; i >= 1; i--){
        if(Number.isInteger(i/2) && Number.isInteger(i/3) && !Number.isInteger(i/12)){
            console.log(i)
        }
    }
}
// Exercise 6
function multTable3(){
    for(let i = 1; i <= 10; i++){
        console.log(`3*${i} = ${3*i}`)
    }
}
// Exercise 7
function multTable17(){
    for(let i = 1; i <= 10; i++){
        console.log(`17*${i} = ${17*i}`)
    }
}
// Exercise 8
function calculator(){
    console.log("Please Select an option -\nPress 1 to add\nPress 2 to subtract\nPress 3 to multiply\nPress 4 to divide\nPress 5 to quit")
    let operator = Number(prompt("Enter selection here: "));
    while(Number.isNaN(operator) || operator < 1 || operator > 5){
        operator = Number(prompt("Please select a valid option"))
    }
    if(operator == 5){
        return;
    }
    let num1 = Number(prompt("Please enter the first number"))
    if(Number.isNaN(num1)){
        console.log("Error: Invalid number entered.")
        return;
    }
    let num2 = Number(prompt("Please enter the second number"))
    if(Number.isNaN(num2)){
        console.log("Error: Invalid number entered.")
        return;
    }
    if(operator == 1){
        console.log(num1 + num2)
    }
    if(operator == 2){
        console.log(num1 - num2)
    }
    if(operator == 3){
        console.log(num1 * num2)
    }
    if(operator == 4){
        console.log(num1 / num2)
    }
}

staircase()
fizzBuzz()
grid(prompt("Enter a grid size"))
numListsAscending()
numListsDescending()
multTable3()
multTable17()
calculator()