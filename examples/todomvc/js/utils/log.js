
function logTodo(todo, msg) {
	const title = todo.get("title");
	console.log(`%c[${title}]%c ${msg}`,"color: blue; font-weight: bold",  "color: black")
}
