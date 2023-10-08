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
                    this.numbers(parseInt(event.target.innerText));
                }
            });
        }
    }

    numbers (value) {
        if (typeof value === 'number') {
            this.KeyEntry.push(value);
            this.screen(this.KeyEntry.join(''));
        } else {
            return this.KeyEntry;
        }
    }

}

export class Operator extends Keypad {
    add () {

    }
    sub () {

    }
    div () {

    }
    mul () {

    }
    mod () {

    }
    equal () {

    }
}
