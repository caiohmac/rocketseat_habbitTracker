type User = {
	age: number
}

function showUserAge(user:User){
	return user.age
}

const user = {
	name: "Caio",
	age: 31
}

showUserAge(user)
	console.log(user.age)
