// The main tasks of this challenge are:
// ● Fetch data from an API when the "Fetch Data" button is clicked.
// ● Render details from the data returned.

// Hint
// Explore the use of the Fetch to make GET requests to a REST API
// endpoint. Also, look up the use of the .map() JavaScript method to
// render data in an array.


const list = document.getElementById("list");

const getData = () => {
	fetch("https://www.anapioficeandfire.com/api/books?pageSize=30")
		.then(res => {
			if (res.status !== 200) {
				console.log(`Oops! we have an error ${response.status}`)
				return
			}
			return res.json()
		})
		.then(res => {

			let list = document.getElementById("list");
			const book = res.map((book,index) => {
				return `<div class="list-item"><p>Book ${index +1}</p><h4>${book.name}</h4> <h6>${book.authors}</h6><h6>${book.numberOfPages}</h6><h6>${book.country}</h6><h6>${book.released}</h6></div>`
			}).join(""); // ,をなくすためにjoin("");を使う

			list.innerHTML = book;

			// for (let i = 0; i < res.length; i++) {
			// 	let listItem = document.createElement('div');
			// 	listItem.classList.add('list-item');
			// 	list.appendChild(listItem);

			// 	let p = document.createElement('p');
			// 	p.innerHTML = `Book ${i + 1}`; // book 1
			// 	listItem.appendChild(p);

			// 	let h4 = document.createElement('h4');
			// 	h4.innerHTML = `${res[i].name}`; // title
			// 	listItem.appendChild(h4);

			// 	let h61 = document.createElement('h6');
			// 	h61.innerHTML = `👦 : ${res[i].authors[0]}`; // authors
			// 	listItem.appendChild(h61);

			// 	let h62 = document.createElement('h6');
			// 	h62.innerHTML = `📖 : ${res[i].numberOfPages} pages`; // page
			// 	listItem.appendChild(h62);

			// 	let h63 = document.createElement('h6');
			// 	h63.innerHTML = `🏘 : ${res[i].country}`; // country
			// 	listItem.appendChild(h63);

			// 	let h64 = document.createElement('h6');
			// 	h64.innerHTML = `⏰ : ${res[i].released}`; // published
			// 	listItem.appendChild(h64);
			// }
			
		})
		.catch(error => {
			alert(`There is an error: ${error}.`);
		})
}

triggerButton.addEventListener("submit", (e) => {
	e.preventDefault();
	getData();
})