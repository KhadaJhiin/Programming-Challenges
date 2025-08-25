// assignment by value
let a = 10;
let b = a; // b is assigned the value of a
b = 20; // changing b does not affect a
console.log(a); 
console.log(b); 

// assignment by reference
let obj1 = { value: 10 };
let obj2 = obj1; // obj2 is assigned a reference to obj1
obj2.value = 20; // changing obj2 affects obj1
console.log(obj1.value); 
console.log(obj2.value); 

function intercambiarPorValor(x, y) {
    let temp = x;
    x = y;
    y = temp;

    return [x, y];
};

let avalue = 5;
let bvalue = 10;

let [nuevoA, nuevoB] = intercambiarPorValor(avalue, bvalue);

console.log("Originales:");
console.log("a =", a, ", b =", b);

console.log("Nuevas:");
console.log("nuevoA =", nuevoA, ", nuevoB =", nuevoB);

function intercambiarPorReferencia(obj1, obj2) {
    let temp = obj1.valor;
    obj1.valor = obj2.valor;
    obj2.valor = temp;

    return [{ valor: obj1.valor }, { valor: obj2.valor }];
}

let objA = { valor: 5 };
let objB = { valor: 10 };

let [nuevoObjA, nuevoObjB] = intercambiarPorReferencia(
    { ...objA }, 
    { ...objB }
);

console.log("Originales:");
console.log("objA =", objA.valor, ", objB =", objB.valor);

console.log("Nuevos:");
console.log("nuevoObjA =", nuevoObjA.valor, ", nuevoObjB =", nuevoObjB.valor);
