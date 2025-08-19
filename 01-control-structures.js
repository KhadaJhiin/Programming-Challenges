/*
Create a program that prints in console all numbers between 10 and
55, those numbers have to be the evens numbers, but excluding 16 and
all numbers multiples of three
*/

for(let i = 10; i <= 55; i++){
    if(i !== 16 && i % 3 !== 0 && i % 2 == 0){
        console.log("This is the correct one: ", i);
    };
};