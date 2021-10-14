export class NumberButton {
    constructor(numberButton, calculator) {
        this.numberButton = numberButton;
        this.calculator = calculator;
        this.value = numberButton.innerHTML;
        this.numberButton.onclick = () => this.onNumberButtonClick();
    }


    onNumberButtonClick() {
        this.calculator.updateNumber(this.value);
    }
}