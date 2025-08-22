const options = `
Hello and welcome to your contact list.
Choose the option you are looking for:

1 . Search for a contact.
2 . Add a new contact.
3 . Update a contact.
4 . Delete a contact.
5 . List elements
0 . Close application. 

---------------------------------------

`;

import { addNewContact, searchContact, updateContact, deleteContact } from "./functions.js";
import readline from "node:readline";
import Contact from "./Contact.js";

let contactList = [];

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
                console.log(searchContact(contactList,searchedName));
                break;
            case "2":
                const newName = await ask("Enter the name: ");
                const newPhoneNumber = await ask("Enter their phone number: ");
                addNewContact(Contact,contactList,newName,newPhoneNumber);
                console.log(`You've added to ${newName} : ${newPhoneNumber}`);
                break;
            case "3":
                const searchName = await ask("Enter the name of the contact to update: ");
                const updatedName = await ask("Enter the new name: ");
                const updatedPhoneNumber = await ask("Enter the new phone number: ");
                console.log(updateContact(contactList,searchName,updatedName,updatedPhoneNumber));
                break;
            case "4":
                const deletedName = await ask("Enter the name of the contact to delete: ");
                contactList = deleteContact(contactList, deletedName);
                console.log(`You've deleted ${deletedName}`);
                break;
            case "5":
                for(let value of contactList){
                    console.log(`Name : ${value.name} - Number : ${value.phoneNumber}`);
                };
                break;
            default:
                console.log("Invalid option. Try again.");
        };

        optionSelected = await ask(options);

    };

    console.log("Thanks for using the app, see you later.");
    rl.close();

}


runApp();





