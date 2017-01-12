function greeter(person: string) {
  return "Hello, " + person;
}

var user = "Jane User";


window.onload = function() {
  document.body.innerHTML = greeter(user);
}
