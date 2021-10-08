slider.oninput = function () {
    let value = document.getElementById('slider').value;
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