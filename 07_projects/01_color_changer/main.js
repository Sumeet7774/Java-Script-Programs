const buttons = document.querySelectorAll('.square-button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        if (e.target.id === 'green') {
            body.style.backgroundColor = '#4CAF50';
        } else if (e.target.id === 'red') {
            body.style.backgroundColor = '#ef1101';
        } else if (e.target.id === 'yellow') {
            body.style.backgroundColor = '#eeff01c4';
        } else if (e.target.id === 'blue') {
            body.style.backgroundColor = 'rgb(7, 7, 248)';
        }
    });
});
