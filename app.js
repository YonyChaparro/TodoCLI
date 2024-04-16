import { createInterface } from "readline";
import chalk from 'chalk';

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

function chooseOption() {
    rl.question("Digita una opción:", (choice)=> {
        switch (choice) {
            case "1":
                console.log("Agregar Tarea");
                addTask();
                break;
            case "2":
                console.log(chalk.blue.bgRed.bold("Listar Tareas"));
                break;
            case "3":
                console.log(chalk.underline.bgBlue("Completar Tarea"));
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