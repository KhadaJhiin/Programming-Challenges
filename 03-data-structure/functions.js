export function addNewContact(classRef, array, name, phone){
    const newContact = new classRef(name, phone);
    array.push(newContact);
};

export function searchContact(array, name){
    let contact = array.find(element => element.name === name);
    return `Name: ${contact.name} - Number: ${contact.phoneNumber}`;
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

