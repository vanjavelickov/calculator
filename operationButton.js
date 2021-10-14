export class OperationButton {
    constructor(operationButton, calculator) {
        this.operationButton = operationButton;
        this.calculator = calculator;
        this.value = operationButton.innerHTML;
        this.resetButton = document.getElementById('reset');
        this.deleteButton = document.getElementById('del');
        this.resetButton.onclick = () => this.resetAll();
        this.deleteButton.onclick = () => this.delete();
        this.operationButton.onclick = () => this.onOperationButtonClick();
    }


    onOperationButtonClick() {
        this.calculator.updateOperation(this.value);
    }
    resetAll() {
        this.calculator.reset();
    }

    delete() {
        this.calculator.delete();
    }
}