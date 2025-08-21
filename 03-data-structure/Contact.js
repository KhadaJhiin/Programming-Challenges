
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