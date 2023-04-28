// get the input element by its ID
let input = document.getElementById("input");


// function that adds the passed value to the input value
let inputValue = value => {
    input.value += value;
};


// function that removes the last character from the input value
let clearInput = () => {
    input.value = input.value.slice(0, input.value.length - 1);
};


// function that clears the input value
let clearAll = () => {
    input.value = "";
};


// function that evaluates the input value and sets the result as the new input value
let calculateResult = () => {
    input.value = eval(input.value);
};