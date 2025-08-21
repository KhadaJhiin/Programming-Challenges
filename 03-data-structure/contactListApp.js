/*
 * Crea una agenda de contactos por terminal.
 * - Debes implementar funcionalidades de búsqueda, inserción, actualización
 *   y eliminación de contactos.
 * - Cada contacto debe tener un nombre y un número de teléfono.
 * - El programa solicita en primer lugar cuál es la operación que se quiere realizar,
 *   y a continuación los datos necesarios para llevarla a cabo.
 * - El programa no puede dejar introducir números de teléfono no numéricos y con más
 *   de 11 dígitos (o el número de dígitos que quieras).
 * - También se debe proponer una operación de finalización del programa.
 * 
 */

const options = `
    Hello and welcome to your contact list.
    Choose the option you are looking for:

    1 . Search for a contact.
    2 . Add a new contact.
    3 . Update a contact.
    4 . Delete a contact.
    5 . Close application. 

    ---------------------------------------

`;

import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(option){
    return new Promise(resolve => rl.question(option, resolve));
};

async function runApp() {
    let optionSelected = await ask(options);

    while(optionSelected != "0" ){

        switch(optionSelected){      
            case "1":
                const searchedName = await ask("Enter the name: ");
                console.log(`You are looking for ${searchedName}`);
                optionSelected = await ask(options);
            case "2":
                const newName = await ask("Enter the name: ");
                const newPhoneNumber = await ask("Enter their phone number: ");
                console.log(`You've added to ${newName} : ${newPhoneNumber}`);
                optionSelected = await ask(options);
        }
    };

    console.log("Thanks for using the app, see you later.");
    rl.close();
}

runApp();