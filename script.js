
let input = prompt("What would you like to do?");
let todos = [];

while (input.toLowerCase() !== "quit" && input.toLowerCase() !== "q") { //loops until user enters 'quit' or 'q'

    if (input.toLowerCase() === "new") {
        let newTodo = prompt("Add a Todo");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`); //prints newTodo that was added to list
    } else if (input.toLowerCase() === 'list') { //if user enters "list"
        for (let task in todos) {
            console.log(`${task}: ${todos[task]}`);
        }

    } else if (input.toLowerCase() === 'delete') { //if user enters "delete"
        let indexToDelete = prompt("Enter todo number you wish to delete");
        todos.splice(indexToDelete, 1);
        //add NaN functionality with Number.isNaN() in case user input is wrong
    } else { //if user enters something that isn't on the list
        alert("Please enter a valid command from the list")
    }
    console.log(todos);
    input = prompt("What would you like to do?");
}

console.log('YOU QUIT THE APP!'); //only appears once user has entered 'quit' and exits loop

// while(input.toLowerCase() !== "quit" && input.toLowerCase() !== "q") { //loops until user enters 'quit' or 'q'

