const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (!height || height <= 0) {
        results.innerHTML = `Please give a valid height.`;
    } else if (!weight || weight <= 0) {
        results.innerHTML = `Please give a valid weight.`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        results.innerHTML = `<span>Your BMI is ${bmi}</span>`;
    }
});
