// Write a function that returns the number of users in a chatroom based on the following rules:
// 1. If there is no one, return "no one online".
// 2. If there is 1 person, return "user1 online".
// 3. If there are 2 people, return "user1 and user2 online".
// 4. If there are n>2 people, return the first two names and add "and n-2 more online".

let chatroomStatus = (arr) => {
	let user1 = arr[0]; 
	let user2 = arr[1];  

	switch(true) {
		case arr.length == 0:
			return "no one online";
		case arr.length == 1:
			return `${user1} online`;
		case arr.length == 2:
			return `${user1} and ${user2} online`;
		case arr.length >= 3:
			return `${user1}, ${user2} and ${arr.length - 2} more online`
	}
}

console.log(chatroomStatus([]));
console.log(chatroomStatus(["paRIE_to"]));
console.log(chatroomStatus(["s234f", "mailbox2"]));
console.log(chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"]));