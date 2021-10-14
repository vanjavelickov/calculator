import {
    NumberButton
} from "./numberButton.js";
import {
    OperationButton
} from "./operationButton.js";


export class Calculator {
    constructor() {
        this.slider = document.getElementById('slider');
        this.slider.onchange = () => this.changeTheme(this.slider.value);
        this.calculatorDisplay = document.getElementById('calculator');
        this.initializeNumbers();
        this.initializeOperators();
        this.newNumber;
        this.operation;
        this.previousOperation;
        this.secondNumber;
        this.result;
        this.allowNumber = true;
    }


    initializeNumbers() {
        let numberButtons = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero', 'point'];
        numberButtons.forEach(x => {
            new NumberButton(document.getElementById(x), this);
        })
    }

    initializeOperators() {
        let operationsButtons = ['addition', 'subtraction', 'multiplication', 'division', 'equal'];
        operationsButtons.forEach(x => {
            new OperationButton(document.getElementById(x), this);
        });

    }

    changeTheme(value) {
        if (value === '1') {
            document.documentElement.className = 'primary-theme';
        }
        if (value === '2') {
            document.documentElement.className = 'secondary-theme';
        }
        if (value === '3') {
            document.documentElement.className = 'accent-theme';
        }
    }


    updateNumber(value) {
        if (this.allowNumber) {
            if (value === '.') {
                if (this.calculatorDisplay.innerHTML.length === 0) {
                    value = '0.'
                }
                if (this.calculatorDisplay.innerHTML.includes('.')) {
                    value = '';
                }
            }
            this.calculatorDisplay.innerHTML += value;
        } else {
            this.calculatorDisplay.innerHTML = value;
            this.allowNumber = true;
        }
    }

    updateOperation(value) {
        this.operation = value;
        this.newNumber = this.calculatorDisplay.innerHTML;
        this.calculate();
    }


    calculate() {
        if (!this.result) {
            this.result = this.newNumber;
            this.newNumber = '';
        } else {
            switch (this.previousOperation) {
                case '+':
                    this.result = parseFloat(this.newNumber) + parseFloat(this.result);
                    break;
                case '-':
                    this.result = parseFloat(this.result) - parseFloat(this.newNumber);
                    break;
                case 'x':
                    this.result = parseFloat(this.newNumber) * parseFloat(this.result);
                    break;
                case '/':
                    if(this.newNumber === '0'){
                        alert('Dividing with zero is not possible')
                    } else {
                        this.result = parseFloat(this.result) / parseFloat(this.newNumber);
                        break;
                    } 
            }

            this.calculatorDisplay.innerHTML = this.result;
        }
        this.previousOperation = this.operation;
        this.allowNumber = false;
    }


    reset() {
        this.newNumber = '';
        this.previousOperation = '';
        this.operation = '';
        this.result = null;
        this.calculatorDisplay.innerHTML = '';
    }

    delete() {
        this.calculatorDisplay.innerHTML = this.calculatorDisplay.innerHTML.slice(0, this.calculatorDisplay.value.length - 1);
        if (this.newNumber !== undefined) {
            this.newNumber = parseInt(this.newNumber / 10);
        }
        if (this.result !== undefined) {
            this.result = parseInt(this.result / 10);
        }
    }

}