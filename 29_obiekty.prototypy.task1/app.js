let employee = new Employee("Andrzej", "Lotos", 35);
let client = new Client("Client 1", "Client full name", []);
let task = new Task("Task 1", client);
task.addOperation("Jakas operacja 1", employee, 30);
console.log(client);