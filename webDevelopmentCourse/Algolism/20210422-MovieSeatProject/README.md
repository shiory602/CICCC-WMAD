> 1) Explain something you have learned today?

### How to get HTMLElement as an array

In this project, I try to create "Movie ticket purchase screen".
First I create HTML and CSS, and then I put same `className` to each seats for manipulating by JavaScript.
- className -> `jsSeat`
So I use `[...document.querySelectorAll('className')];` for getting each Element from HTML.
```JS
/** @type {HTMLElement[]} */
const seats = [...document.querySelectorAll('.jsSeat')];
```

> 2) Tell me something you found more interesting than others?

### How to create switching system

It was interesting to create switching data system.
1. Create `changePrices()` function
2. Get the selected data from option selector. (Which movie you select)
3. call `getMoviePrice()` function which returns price data and multiple the sum of seat number.
4. Use `.innerHTML` and show the price data in the display.

```JS
function changePrices() {
    let movieName = movies.value;
    price = getMoviePrice(movieName) * seatSum;
    totalPrice.innerHTML = `$${price}`;
}

function getMoviePrice(name) {
    if (name === '') {
        return 0;
    } else if (name === 'avengers') {
        return 10;
    } else if (name === 'joker') {
        return 12;
    } else if (name === 'toyStory') {
        return 8;
    } else if (name === 'theLionKing') {
        return 9;
    } else {
        throw new Error(`Unknown movie: ${name}`);
    }
}
```

> 3) Tell me something you found more difficult than others?

I really don't know how to manipulate database yet.
So this is challenging for me to save seats data and also load it.