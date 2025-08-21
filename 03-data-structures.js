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

console.log(`
    Hello and welcome to your contact list.
    Choose the option you are looking for:

    1 . Search for a contact.
    2 . Add a new contact.
    3 . Update a contact.
    4 . Delete a contact.
    5 . Close application. 

    ---------------------------------------

`);

class Contact {
    #id;
    #name;
    #phoneNumber;
    constructor(name, phoneNumber){
        this.#id = ++Contact.idAssignation;
        this.#name = name;
        this.#phoneNumber = this.#verifierPhoneNumbers(phoneNumber);
    };

    // static properties
    static idAssignation = 0;

    // getters and setters
    get id(){
        return this.#id;
    };
    get name(){
        return this.#name;
    };
    get phoneNumber(){
        return this.#phoneNumber;
    };
    set name(newName){
        this.#name = newName;
    };
    set phoneNumber(newPhoneNumber){
        this.#phoneNumber = newPhoneNumber;
    };

    // Methods
    #verifierPhoneNumbers(phoneNumber){
        if(typeof(phoneNumber) != "number" || phoneNumber.toString().length != 10){
            throw new Error("There's an error in the number inserted.");
        }else{
            return phoneNumber;
        };
    };

};

// Proof

const contactOne = new Contact("Jose", 3126699609);
const contactTwo = new Contact("Jerald", 3127498808);
const contactThree = new Contact("Jacke", 3042553669);

console.log(contactOne.phoneNumber);