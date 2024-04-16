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
    console.log("1. Agregar Tarea");
    console.log("2. Listar Tareas");
    console.log("3. Completar Tarea");
    console.log("4. Salir");
}

displayMenu();