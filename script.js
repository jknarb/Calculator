// numerical operation functions
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
    if (y == 0) {
        alert("Nah m8");
        input = "";
        displayCalc = [];
        toCalc = [];
        textDisplay = "";
        displayText.textContent = input;
    } else {
        return x / y;
    }
};

// DOM Selectors
const operateButton = document.querySelectorAll(`button[id="operator"]`); //Operator selector
const numberButtons = document.querySelectorAll(`button[id="number"]`); // Number button selector
const displayContainer = document.querySelector(".display"); // Display selector
const displayText = displayContainer.querySelector("p"); // Display p element selector
const equals = document.getElementById("equal"); // Equal button selector
const clearButton = document.getElementById("clear"); //Clear button selector
const backspaceButton = document.getElementById("backspace"); //Backspace button Selector


// Variable presets (empty)
let toggle = false; //Toogle to differentiate between input already operated on/not operated on. To reset input for further calculations.
let toCalc = [];
let input = "";
let textDisplay = "";


// Event handler for number buttons
numberButtons.forEach(button => button.addEventListener("click", function(event){

    let number = button.textContent; //Capturing text of button clicked

    // 1. Check for more than one decimal + alert if already has 1 in input string.
    // 2.Check for input toggle states --> to reset and input new numerical data or further concatenation.
    if (input.includes(".") == true && number == ".") {
        alert("You can only have use 1 decimal I'm afraid. LOL noob.")
    } else {
        if (toggle === false) { // False = number input has not passed operation stage. Input is not reset.
            input = input + number; //Adding string to stored input.
            displayText.textContent = textDisplay + input; // Displaying concatenated input stored in textDisplay + new input.
        } else {
            input = "";
            textDisplay = "";
            displayText.textContent = textDisplay + input;
            input = input + number;
            displayText.textContent = textDisplay + input;
            toCalc = [];
            toggle = false;
        }
    }

}));


//Event handler for operator buttons
operateButton.forEach(button => button.addEventListener("click", function (){

    let operator = button.textContent

    if (toCalc.length == 0 || toCalc.length == 2) {
        toCalc.push(parseFloat(input));
        toCalc = toCalc.filter(Boolean); //filter toCalc array for NaN to prevent operation on NaN.
    }

    if (toCalc.length == 3) {
        let x = toCalc[0];
        let y = toCalc[2];
        let oper = toCalc[1];

        if ( y === void undefined ) {
            y = 0;
        } else if (x === void undefined) {
            x = 0;
        }

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

    //Check to only push operator if array lenght == 1. i.e. only push operator if theres only a number.
    } else if (toCalc.length == 1) {

        toCalc.push(operator);
        textDisplay = toCalc.join(" ");
        displayText.textContent = textDisplay;
        textDisplay = toCalc.join(" ") + " ";
        input = "";
        toggle = false;
    }

}));

equals.addEventListener("click",function() {

    toCalc.push(parseFloat(input));
    toCalc = toCalc.filter(Boolean);
    
    if (toCalc.length == 0) {
        alert("M8 you havent even pressed a numba. Whadda fok bru?");
    } else {

        let x = toCalc[0];
        let y = toCalc[2];
        let oper = toCalc[1];
        
        if ( y === void undefined ) {
            y = 0;
        } else if (x === void undefined) {
            x = 0;
        }

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
                console.log(toCalc);
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



backspaceButton.addEventListener("click", function(){

    console.log(toCalc.length);

    if (toCalc.length == 0) {
        const toSliceInput = input;
        input = toSliceInput.slice(0, -1);
        displayText.textContent = input;
    } else if (toCalc.length == 2) {
        const toSliceTextDisplay = input;
        input = toSliceTextDisplay.slice(0, -1);
        displayText.textContent = textDisplay + input;
    }
    
});

