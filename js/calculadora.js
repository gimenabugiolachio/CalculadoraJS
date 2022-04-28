window.addEventListener("load", ()=> {
    const display = document.querySelector(".calculator-display");
    const keypadButons = document.getElementsByClassName("keypad-button");



    const keypadButtonArray = Array.from(keypadButons);  

    keypadButtonArray.forEach( (button) =>{
        button.addEventListener("click", ()=> {
            calculadora(button, display)
        })
    })
});

function calculadora(button, display){
    switch (button.innerHTML){
        case "AC":
            borrarTodo(display);
            break;
        case "=":
            calcular(display);
            break;
        default:
            actualizar(display, button);
            break;
    }
}

function calcular(display){
    display.innerHTML = eval(display.innerHTML)
}

function actualizar(display, button){
    if (display.innerHTML == 0) {
        display.innerHTML = "";
    }
    display.innerHTML += button.innerHTML;
}

function borrarTodo(display){
    display.innerHTML = 0;
}