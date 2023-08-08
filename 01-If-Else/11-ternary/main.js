//let login = promt('Enter username')
// let message;
// if (login == "Employee") {
//   message = "Hello";
// } else if (login == "Director") {
//   message = "Greetings";
// } else if (login == "") {
//   message = "No login";
// } else {
//   message = "";
// }
let login = promt('Enter username')
let message = login === 'Employee' ? 'Hello' : 
login === 'Director' ? 'Greeting' : 
login === "" ? 'No login' :
""

