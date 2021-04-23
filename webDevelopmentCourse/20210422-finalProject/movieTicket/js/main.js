const seatCount = document.querySelector('#seatCount');
const price = document.querySelector('#price');
const time = document.querySelector('#time');
const boxes = document.querySelectorAll('.jsSeat');
const available = document.querySelector('.available');
const sold = document.querySelector('.sold');
const selected = document.querySelector('.selected');

let seatSum = 0;
let priceSum = 0;

seatCount.innerHTML = seatSum;
price.innerHTML = `$${priceSum}`;
time.innerHTML = '20:40';

boxes.forEach(box => box.addEventListener('click', e => {
    /** @type {HTMLElement} */
    const el = e.currentTarget;
    if(el.classList.contains('sold')) {
        alert('This seat is already sold.');
    } else if(el.classList.contains('available')) {
        el.classList.add('selected');
        el.classList.remove('available');
    } else if(el.classList.contains('selected')) {
        el.classList.add('available');
        el.classList.remove('selected');
    }
}));