export function addNewContact(classRef, array, name, phone){
    if(name && phone && typeof(phone) == "number" && String(phone).length == 10){
        const newContact = new classRef(name, phone);
        array.push(newContact);
    }else{
        throw new Error("Invalid entry, try again...");
    };
};

export function searchContact(array, name){
    const filterArray = array.filter(item => item.name == name);
    if(filterArray.length !== 0){
        for(let value of filterArray){
            console.log(`Name : ${value.name} - Number : ${value.phoneNumber}`);
        };
    }else{
        console.log("Contact not found");
    };

};

export function updateContact(array, name, newName, newPhone){
    let contact = array.find(element => element.name === name);
    contact.name = newName;
    contact.phoneNumber = newPhone;
    return `New name : ${contact.name} - new phone : ${contact.phoneNumber}`;
};

export function deleteContact(array, name){
    return array.filter(item => item.name !== name);
};
