const num = document.querySelectorAll(".num");
const clear = document.querySelector("#clear");
const numButtons = Array.from(num);
const operation = document.querySelectorAll(".operation");
const numOperation = Array.from(operation);
const upperscreen = document.querySelector("#upperscreen");
const lowerscreen = document.querySelector("#lowerscreen");
const equal = document.querySelector("#equal");
let upper = "";
let lower = "";
let firstnum = 0;
let secondnum = 0;
let choose = true; //true = firstnum, false = secondnum
let operator = "";
let notyetoperated = true;
let secondoperate = true;
let lastbtn = "";

for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener ("click", () => {
        if (lastbtn == "equal") {
            firstnum = 0;
        }
        if (choose) {
            upper += numButtons[i].innerText;
            upperscreen.textContent = upper;
            lowerscreen.textContent = lower;       
            firstnum = firstnum * 10 + Number(numButtons[i].innerText);
        } else if (!choose) {
            upper += numButtons[i].innerText;
            upperscreen.textContent = upper;       
            secondnum = secondnum * 10 + Number(numButtons[i].innerText);
        }
        lastbtn = "num";
    });
}

for (let i = 0; i < numOperation.length; i++) {
    numOperation[i].addEventListener("click", () => {
        if (secondoperate && lastbtn != "operate" && lastbtn == "equal") {
            upper = firstnum + " " + numOperation[i].innerText + " ";
            upperscreen.textContent = upper;
            choose = false;
            operator = numOperation[i].innerText;
            notyetoperated = false;    
            lastbtn = "operate"
        }
        if (secondoperate && lastbtn != "equal" && lastbtn != "operate") {
            upper += " " + numOperation[i].innerText + " ";
            upperscreen.textContent = upper;
            choose = false;
            operator = numOperation[i].innerText;
            notyetoperated = false;    
            lastbtn = "operate"
        }
        secondoperate = false;
    })
}

clear.addEventListener("click", () => {
    upper = "";
    upperscreen.textContent = upper;   
    lower = "";
    lowerscreen.textContent = lower;
    firstnum = 0;
    secondnum = 0;
    choose = true;
    operator = "";
    notyetoperated = true;
});

equal.addEventListener("click", () => {
    if (!choose && lastbtn == "num") {
        upper += " " + equal.innerText + " ";
        upperscreen.textContent = upper;
        lower = operate(operator, firstnum, secondnum);
        lowerscreen.textContent = lower;
        firstnum = lower;
        upper = "";
        lower = ""; 
        choose = true;
        notyetoperated = true;
        secondnum = 0;
        secondoperate = true;
    }
    lastbtn = "equal"
})




function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operation, num1, num2) {
    if (operation == '+') {
        return add(num1,num2);
    } else if (operation == "-") {
        return subtract(num1,num2);
    } else if (operation == "x") {
        return multiply(num1, num2);
    } else if (operation == "÷") {
        return divide(num1, num2)
    }
}