
let input = prompt("What would you like to do?");
let todos = [];

while(input.toLowerCase() !== "quit") {
    
    if (input === "new"){
        let newTodo = prompt("Add a Todo");
        todos.push(newTodo);
        
    } else if(input === 'list') { //if user enters "list"
        for (let task in todos){
            console.log(task);
        }
    } else if(input === 'delete') { //if user enters "delete"
        let indexToDelete = prompt("Enter todo number you wish to delete");
        todos.splice(indexToDelete);
    } else { //if user enters something that isn't on the list
    input = prompt("Please enter a valid command from the list") 
    }
    console.log(todos);
    input = prompt("What would you like to do?");
}