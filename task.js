

 const menu =`TASK MANAGER\n\nWhat would you like to do (Please enter one of the options below):\n"TASKS" - Displays All Tasks\n"NEW" - Add A New Task\n"REMOVE" - Remove A Task\n"CLOSE" - Close The Task Manager`

const tasks = [
    `Charge MacBook`,
    `Master JavaScript`
];

let showTasks = ``;
let newTask;
let userInput = prompt(menu);

while (userInput !== `CLOSE`){

    if (userInput === `TASKS`){
        for (task of tasks){
            showTasks += `${task}\n`;
        }
        alert(showTasks);

        showTasks = ``;
    }

    if (userInput === `NEW`){
        newTask = prompt(`Please enter the new task:`)
        alert (`"${newTask}" has been added.`) 
        tasks.push(newTask);
    }

    if (userInput === `REMOVE`){
        alert(`You selected REMOVE`)
    }

    let userInput = prompt(menu)
}

alert(`Thank you for using Task Manager.`)