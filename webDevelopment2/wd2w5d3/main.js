let id = "5KmQtJguBi6mZs8n-FxJcQ";
let key = "1cqz-iH_8KD6V3xmCXFJKzg0QLK00THA23EmBMMOq8zdpq771RysSHHxJXVfiqOtAEMoho1228fqCx4h7Dl7tkBa08ilTCC1niy01DeetFUTa8je0aqiXtlKuO1SYHYx";

let URL = `https://api.yelp.com/v3/businesses/${id}`;

let req = new Request(url, {
	method: "GET",
	headers: {new Headers({
		"Authorization": "Bearer", key,
		"Content-Type": "application/"
	})
	mode: "no-cors"
}
})

fetch (req)
	.then((response) => {
		if (response.ok) {
			return response.json();
		} else {ssss
		throw new Error()
	}
	})
	.then((jsonData) => {
		console.log(jsonData);
	})
	.catch((err) => {
		console.log("ERROR:", err.message);
	})