let seatCount = document.querySelector('#seatCount');
let price = document.querySelector('#price');
let time = document.querySelector('#time');
let boxes = document.querySelectorAll('.jsSeat');
let available = document.querySelector('.available');
let sold = document.querySelector('.sold');
let selected = document.querySelector('.selected');

seatCount.innerHTML = '3';
price.innerHTML = `$${30}`;
time.innerHTML = '20:40';

boxes.forEach(box => box.addEventListener('click', e => {
    console.log('hi');
}));