
let input = prompt("What would you like to do?");
let todos = [];

while(input.toLowerCase() !== "quit") {
    
    if (input.toLowerCase() === "new"){
        let newTodo = prompt("Add a Todo");
        todos.push(newTodo);
        
    } else if(input.toLowerCase() === 'list') { //if user enters "list"
        for (let task in todos){
            console.log(`${task}: ${todos[task]}`);
        }
    } else if(input.toLowerCase() === 'delete') { //if user enters "delete"
        let indexToDelete = prompt("Enter todo number you wish to delete");
        todos.splice(indexToDelete, 1);
    } else { //if user enters something that isn't on the list
    alert("Please enter a valid command from the list") 
    }
    console.log(todos);
    input = prompt("What would you like to do?"); 
}