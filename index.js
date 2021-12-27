const calcsDisplay = document.getElementById("calcs");
const resultsDisplay = document.getElementById("results");

let resultNum = 0;
let resultString = '';
const inputButtons = document.querySelectorAll("input[type=button]");
const calcButtons = document.querySelectorAll("button[type=button]");

inputButtons.forEach(button => {
    button.addEventListener("click", () => {
        resultString = resultString + button.value;
        calcsDisplay.innerText = resultString;
    });
});

calcButtons.forEach(button => {
    button.addEventListener("click", () => {
        if(button.value == 'delete') {
            deleteElement();
        }
        else if(button.value == 'reset') {
            reset();
        }
        else if(button.value == 'equal') {
            equal();
        }
    });
});

function deleteElement() {
    console.log('delete');
}

function reset() {
    console.log('reset');
}

function equal() {
    console.log('equal');
}