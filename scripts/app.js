import {Operator} from "./calculator.js";

class Calculator extends Operator {
    
    constructor () {
        super();
        this.display = document.querySelector('.main_screen');
        this.view = document.querySelector('.small_screen')
    }

    screen (value) {
        const Intformat = new Intl.NumberFormat('en-US');
        if (value.length !== 16 && value.length > 3) {
            return this.display.textContent = Intformat.format(value);
        } else {
            return;
        }
    }
}

let calc = new Calculator();
