import {Operator} from "./calculator.js";

class Calculator extends Operator {
    
    constructor () {
        super();
        this.display = document.querySelector('.main_screen');
        this.view = document.querySelector('.small_screen')
    }

    screen (value) {
        const Intformat = new Intl.NumberFormat('en-US');
        
        if (value.length > 0) {
            return this.display.textContent = Intformat.format(value);
        }
    }
}

let calc = new Calculator();
