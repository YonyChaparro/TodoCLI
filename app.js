import { createInterface } from "readline";
import chalk from 'chalk';
import { log } from "console";

const tasks = []

/*Lo usamos para leer la consola de comandos */

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});



/*Pintamos el menú en la consola*/

function displayMenu(){
    console.log(chalk.yellow.bold("🤠 To Do App 🍻"));
    console.log(chalk.bgBlueBright("Menú de opciones"));
    console.log("1. Agregar Tarea");
    console.log("2. Listar Tareas");
    console.log("3. Completar Tarea");
    console.log("4. Salir");
}


//Funcionalidad de añadir tarea
function addTask() {
    rl.question(chalk.bgMagentaBright("Escribe la tarea:"), (task)=>{
        tasks.push({task, completed:false});
        console.log(chalk.green.bold("La tarea se ha agregado con éxito!"));
        displayMenu();
        chooseOption();
    });
};

//Funcionalidad de listar tareas

function listTasks() {
    console.log(chalk.yellow.bold("\n🦊🦊🦊🦊🦊 Tareas 🦊🦊🦊🦊🦊\n"));
  
    if (tasks.length === 0) {
      console.log(chalk.green.bold("No hay tareas por hacer 😀👌🏻\n"));
    } else {
      tasks.forEach((task, index) => {
        let status = task.completed ? "✅" : "❌";
  
        if (task.completed) {
          console.log(
            chalk.greenBright(`${index + 1}. ${status} - ${task.task}`)
          );
        } else {
          console.log(chalk.redBright(`${index + 1}. ${status} - ${task.task}`));
        }
      });
    }
  
    displayMenu();
    chooseOption();
  }
//Funcionalidad de completar tareas

function completeTask() {
    rl.question(
        chalk.bgMagentaBright("Digita el número de la tearea a completar: "),
        (taskNumber)=>{
            const index = parseInt(taskNumber) -1;
            if (index >= 0 && index < tasks.length) {
                tasks[index].completed = true;
                console.log(chalk.green.bold("Tarea marcada con éxito \n"));
            } else{
                console.log(chalk.red.bold(`${index} es un número de tarea inválido`));
            }
            displayMenu();
            chooseOption();
        }
    )
}

//Funcionalidad de marcar en el menú

function chooseOption() {
    rl.question("Digita una opción:", (choice)=> {
        switch (choice) {
            case "1":
                console.log("Agregar Tarea");
                addTask();
                break;
            case "2":
                console.log(chalk.blue.bgRed.bold("Listar Tareas"));
                listTasks();
                break;
            case "3":
                console.log(chalk.underline.bgBlue("Completar Tarea"));
                completeTask()
                break;
            case "4":
                console.log(chalk.blue.underline.bold("Chaitooo!!!"));
                rl.close();
                break;
            default:
                console.log(chalk.blue.bgRed.bold("seleccione una opcion válida pndejo!"));
                displayMenu();
                chooseOption();
        }
    })
}

displayMenu();
chooseOption();