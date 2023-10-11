export class Keypad {
    constructor () {
        this.KeyEntry = [];
        this.attachEventListener(); 
    }

    attachEventListener () {
        const keypad = document.querySelector('.buttons');
        for (const iterator of keypad.children) {
            iterator.addEventListener('click', (event) => {
                if (event.target) {
                    let target = event.target.innerText;
                    if (!isNaN(Number(target))) {
                        this.numbers(parseInt(target, 10));
                    } else {
                        if (target in this.operator) {
                            this.dispatch(target)
                        }
                    }
                }
            });
        }
    }

    numbers (value) {
        if (typeof value === 'number') {
            this.KeyEntry.push(value);
            this.screen(this.KeyEntry.join(''));
        }
    }

}

export class Operator extends Keypad {
    constructor () {
        super();
        this.operator = {
            '+': (a, b) => a + b, 
            '-': (a, b) => a - b,
            '/': (a , b) => a / b,
            'x': (a, b) => a * b,
            '%': (a, b) => a % b,
            '=': '',
            'C': ''
        };
        this.result = 0;
        this.cache = [];
    }

    dispatch (operand) {
        switch (operand) {
            case '+':
                return this.signs('+');
            case '-':
                return this.signs('-');
            case '/':
                return this.signs('/');
            case 'x':
                return this.signs('x');
            case '%':
                return this.signs('%');
            case '=':
                return this.equal();
            case 'C':
                return this.clear();
        }
    }

    signs (operand) {
        /** screen working here */
        this.cache.push(...this.KeyEntry, operand);
        this.screen(this.cache);
        this.KeyEntry = [];
        if (operand.toString() in this.operator) {
            this.KeyEntry.map(value => this.operator[operand](value, this.result));
        }
    }
    equal (operand) {
        if (operand in this.operator) {
            return this.result;
        }
    }

    clear () {
        this.KeyEntry = [];
        this.screen(this.KeyEntry.join(''));
        this.cache = [];
        this.result = 0;
    }
}
