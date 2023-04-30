let input = document.getElementById("input");

let inputValue = value => {
    input.value += value;
};

let clearInput = () => {
    input.value = input.value.slice(0, input.value.length - 1);
};

let clearAll = () => {
    input.value = "";
};

let calculateResult = () => {
    input.value = eval(input.value);
};

let numPad = event => {
        if (event.key >= "0" && event.key <= "9" || event.key === "." || event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/") {
            inputValue(event.key);
            console.log(input.value);
        } 
        if (event.key === "Enter") {
            calculateResult();
            console.log(input.value);
        }
}

document.addEventListener("keyup", numPad);
