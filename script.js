import {
    Calculator
} from "./calculator.js";

window.onload = initialize();

function initialize() {
    let calculator = new Calculator();
    let slider = document.getElementById('slider');
    slider.onchange = () => changeTheme(slider.value);
}

function changeTheme(value) {
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
