function wordAnalyser(wordOne, wordTwo){
    if(wordOne === wordTwo){
        return `The words are a palindrome`
    }else if(isAnagram(wordOne,wordTwo) === 1){
        return `The words are anagrams`
    };
        
};

let newWord = "";
function palindrome(word){
    for(let i = word.length - 1; i >= 0 ; i--){
        newWord += word[i];
    };
    if(word === newWord){
        return true;
    }else{
        return false;
        
    };
};

function isAnagram(wordOne, wordTwo){
    let mult;
    for(let value of wordOne){
        if(wordTwo.includes(value)){
            return mult *= 1;
        }else{
            return mult *= -1;
        };
    };
};

function isIsogram(){

};




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