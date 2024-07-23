const key = document.querySelectorAll('.key');
const display_input = document.querySelector('.display .input');
const display_output = document.querySelector('.display .output');
let input = "";
key.forEach(function (division){
    const value = division.dataset.key;
    division.addEventListener('click', function (e) {
        if (value == 'clear') {
            input = "";
            display_input.innerHTML = "";
            display_output.innerHTML = "";
        } else if (value == 'brackets') {
            if (input != "") {
                input = "("+input+")";
                display_input.innerHTML = input
            }
         } else if (value == 'backspace') {
            input = input.slice(0, -1);
            display_input.innerHTML = input
        } else if (value == '=') {
            let result = eval(input);
            display_output.innerHTML = result;
        } else {
            input += value;
            display_input.innerHTML = input;
        }
    })
});
