function addition (x,y) {
    return (x + y);
};

function subtraction (x,y) {
    return x - y;
};

function multiplication (x,y) {
    return x * y;
};

function division (x,y) {
    if (x != 0 && y != 0) {
        return x / y;
    } else {
        return ("Nah m8");
    }
};

const operateButton = document.querySelectorAll(`button[id="operator"]`);
const numberButtons = document.querySelectorAll(`button[id="number"]`);
const displayContainer = document.querySelector(".display");
const displayText = displayContainer.querySelector("p");
const equals = document.getElementById("equal");
const clearButton = document.getElementById("clear");

let toggle = false;
let toCalc = [];
let input = "";
let textDisplay = "";

numberButtons.forEach(button => button.addEventListener("click", function(){

    let number = button.textContent;

    if (toggle === false) {
        input = input + number;
        displayText.textContent = textDisplay + input;
    } else {
        input = "";
        textDisplay = "";
        displayText.textContent = textDisplay + input;
        input = input + number;
        displayText.textContent = textDisplay + input;
        toCalc = [];
        toggle = false;
    }

}));

operateButton.forEach(button => button.addEventListener("click", function (){

    let operator = button.textContent
    console.log(toCalc.length);
    
    if (toCalc.length != 1) {
        toCalc.push(parseInt(input));
    } 

    if (toCalc.length == 3) {
        let x = toCalc[0];
        let y = toCalc[2];
        let oper = toCalc[1];

        switch (oper) {
            case "+":
                toCalc = [];
                toCalc.push(addition(x,y));
                console.log(toCalc)
                break;

            case "-":
                toCalc = [];
                toCalc.push(subtraction(x,y));
                console.log(toCalc)
                break;

            case "*":
                toCalc = [];
                toCalc.push(multiplication(x,y));
                console.log(toCalc)
                break;

            case "/":
                toCalc = [];
                toCalc.push(division(x,y));
                console.log(toCalc)
                break;  
                
            default:
                break;
        }

        toCalc.push(operator);
        textDisplay = toCalc.join(" ");
        displayText.textContent = textDisplay;
        textDisplay = toCalc.join(" ") + " ";
        input = "";
        toggle = false;

    } else {

        toCalc.push(operator);
        textDisplay = toCalc.join(" ");
        displayText.textContent = textDisplay;
        textDisplay = toCalc.join(" ") + " ";
        input = "";
        toggle = false;

    }


}));

equals.addEventListener("click",function() {

    toCalc.push(parseInt(input));
    toCalc = toCalc.filter(Boolean);
    
    if (toCalc.length == 0) {

        alert("M8 you havent even pressed a numba. Whadda fok bru?");
        
    } else {

        let x = toCalc[0];
        let y = toCalc[2];
        let oper = toCalc[1];

        switch (oper) {
            case "+":
                toCalc = [];
                toCalc.push(addition(x,y));
                console.log(toCalc)
                break;

            case "-":
                toCalc = [];
                toCalc.push(subtraction(x,y));
                console.log(toCalc)
                break;

            case "*":
                toCalc = [];
                toCalc.push(multiplication(x,y));
                console.log(toCalc)
                break;

            case "/":
                toCalc = [];
                toCalc.push(division(x,y));
                console.log(toCalc)
                break;  
                
            default:
                break;
        }

        textDisplay = toCalc[0];
        toggle = true;
        displayText.textContent = textDisplay;
        textDisplay = toCalc.join(" ") + " ";
        input = textDisplay;
        input = "";
    }

});

clearButton.addEventListener("click", function(){

    input = "";
    displayCalc = [];
    toCalc = [];
    textDisplay = "";
    displayText.textContent = input;

});

