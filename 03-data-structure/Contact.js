class Contact {
    #id;
    #name;
    #phoneNumber;
    constructor(name, phoneNumber){
        this.#id = ++Contact.idAssignation;
        this.#name = name;
        this.#phoneNumber = phoneNumber;
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
};
export default Contact;