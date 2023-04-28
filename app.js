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