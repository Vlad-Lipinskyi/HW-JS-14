const friends = [
	{
		name: "vlad",
		eyeColor: "blue",
		gender: "male",
		isActive: true,
		email: "example1@gmail.com",
		age: 13,
	},
	{
		name: "slavik",
		eyeColor: "green",
		gender: "male",
		isActive: false,
		email: "example2@gmail.com",
		age: 12,
	},
	{
		name: "milana",
		eyeColor: "grey",
		gender: "female",
		isActive: false,
		email: "example3@gmail.com",
		age: 14,
	},
	{
		name: "stas",
		eyeColor: "blue",
		gender: "male",
		isActive: true,
		email: "example4@gmail.com",
		age: 14,
	},
]


// 1 Завдання

const names = friends.map(friend => friend.name);
console.log(names);


// 2 Завдання

const eyesColor = friends.filter(friend => friend.eyeColor === "blue");
console.log(eyesColor);


// 3 Завдання

const maleGender = friends.filter(friend => friend.gender === "male").map(friend => friend.name);
console.log(maleGender);


// 4 Завдання



// 5 Завдання

const findEmail = friends.find(friend => friend.email === "example1@gmail.com");
console.log(findEmail);


// 6 Завдання

const minAge = 13; 
const maxAge = 14;
const ages = friends.filter(friend => friend.age >= minAge && friend.age <= maxAge)
console.log(ages)