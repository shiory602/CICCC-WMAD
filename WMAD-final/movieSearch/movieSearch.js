const movieObj = './movieObj.json';

let searchBox = document.querySelector('#searchBox');
let searchBar = document.querySelector('#searchBar');
searchBar.addEventListener("click", (e)=> {
  e.preventDefault();
  searchMovie();
})

function searchMovie() {
  let ul = document.createElement(ul);
  let li = document.createElement(li);
}