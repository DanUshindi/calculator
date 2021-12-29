const outputDisplay = document.getElementById("results");
const inputDisplay = document.getElementById("calcs");

const buttons = Array.from(document.getElementsByClassName("button"));

buttons.map(button => {
    button.addEventListener("click", function(event) {
        switch(event.target.innerText) {
            case 'RESET':
                inputDisplay.innerText = '';
                break;
            case 'DEL':
                if(inputDisplay.innerText) {
                    inputDisplay.innerText = inputDisplay.innerText.slice(0, -1);
                }
                break;
            case '=':
                try {
                    outputDisplay.innerText = eval(inputDisplay.innerText);
                    inputDisplay.innerText = '';
                } catch {
                    inputDisplay.innerText = 'Error!';
                }
                break;
            default:
                inputDisplay.innerText += event.target.innerText;
        }
    });
});