function ask () { 
    let input = prompt("What would you like to do?");
    while (true) {
        if (input === "new") {
            return "new";
        } else if (input === "list") {
            return "list";
        } else if (input === "delete") {
            return "delete";
        } else if (input === "quit") {
            return "quit";
        } else {
            input = prompt("Enter a valid command");
        }   
    }
}

const list = {};
let numberTodo = 0; 
while (true) {
    let query = ask(); 
    if (query === "new") {
        list[numberTodo] = prompt("Enter new todo");
        console.log(list[numberTodo] + " added to list");
        numberTodo++;
    } else if (query === "list") {
        console.log("**********");
        for(let i = 0; i < numberTodo; i++) { 
            console.log(i + ": " + list[i]);
        }
        console.log("**********");
    } else if (query === "delete") {

        let deleteask = prompt("Wich one do you want to delete?");
        list[deleteask] = "deleted";
    
    } else if (query === "quit") {
        break;
    }
}

