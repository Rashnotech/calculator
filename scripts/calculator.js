export class Keypad {
    constructor () {
        this.KeyEntry = [];
        this.attachEventListener();
        this.main = document.querySelector('.main_screen');
        this.small = document.querySelector('.small_screen');
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
            this.main.innerText = this.KeyEntry.join('');
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
            '=': '=',
            'C': 'clear',
            'CE': 'swipe'
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
                return this.equal('=');
            case 'C':
                return this.clear('C');
            case 'CE':
                return this.swipe('CE');
        }
    }

    signs (operand) {
        let temp = [], Num = '';
        if (this.main.textContent > 0) {
            Num = this.main.textContent;
        } else {
            this.KeyEntry.forEach((value, index) => {
                if (typeof value === 'number') {
                    Num += value;
                }
            });
        }
        this.cache.push(Number(Num), operand);
        if (this.cache.length > 2) {
            this.cache.forEach((value, index) => {
                if (typeof(value) === 'number' && index !== this.cache.length - 1) {
                    this.result = this.operator[this.cache[index + 1]](value, this.cache[index + 2]);
                    if (!isNaN(this.result)) temp.push(this.result);
                }
                if (index === this.cache.length - 1) temp.push(this.cache.slice(-1)[0]);
            });
            this.cache = temp;
            this.main.innerText = temp[0];
        }
        this.screen(this.cache);
        this.KeyEntry = [];
    }
    equal (operand) {
        let temp = [];
        if (operand in this.operator && this.cache.length > 0) {
            this.cache.push(...this.KeyEntry, operand);
            this.screen(this.cache);
            this.cache.forEach((value, index) => {
                if (typeof(value) === 'number' && index !== this.cache.length - 1) {
                    if (this.cache[index + 1] !== '=') {
                        this.result = this.operator[this.cache[index + 1]](value, this.cache[index + 2]);
                    }
                    if (!isNaN(this.result)) temp.push(this.result);
                }
                if (index === this.cache.length - 1) return;
            });
            this.main.innerText = temp[0];
            this.KeyEntry = [];
            this.cache = [];
        }
    }

    clear (operand) {
        if (operand in this.operator) {
            this.KeyEntry = [];
            this.main.innerText = 0;
            this.small.innerHTML = '&nbsp;';
        }
    }
    swipe (operand) {
        if (operand in this.operator) {
            this.KeyEntry = [];
            this.main.innerText = 0;
        }
    }
    dot () {
        // Handle decimal
    }
    negates () {
        // negates a value
    }

}
