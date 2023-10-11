import {Operator} from "./calculator.js";

class Calculator extends Operator {
    
    constructor () {
        super();
        this.display = document.querySelector('.main_screen');
        this.view = document.querySelector('.small_screen')
    }

    screen (value) {
        const Intformat = new Intl.NumberFormat('en-US');
        if (!(value instanceof Array) && value.length > 0 && this.result === 0) {
            return this.display.textContent = Intformat.format(value);
        }
        else if (value instanceof Array) return this.view.textContent = value.join(' ');
    }
}

let calc = new Calculator();
