import {Operator} from "./calculator.js";

class Calculator extends Operator {
    
    constructor () {
        super();
        this.display = document.querySelector('.main_screen');
        this.view = document.querySelector('.small_screen')
    }

    screen (value) {
        return this.display.textContent = value;
    }
}

let calc = new Calculator();
