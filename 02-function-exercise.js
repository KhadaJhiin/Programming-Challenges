/*
Create a function that receive two parameters of string type and returns a number.
The function prints all numbers between one to one hundred, having in count that:

1 . If number is multiple of 3, it shows the first parameter
2 . If number is multiple of 5, it shows the second parameter
3 . If number is multiple of 3 and 5, it shows the concatenation of the two parameters
4 . The function also shows the amount of times that the numbers was printed
*/

function logicNumber(textOne, textTwo){
    let count = 0;
    for(let i = 1; i <= 100; i++){
        if(i % 3 == 0 && i % 5 != 0){
            console.log(textOne);
        }else if(i % 5 == 0 && i % 3 != 0){
            console.log(textTwo);
        }else if(i % 5 == 0 && i % 3 == 0){
            console.log(textOne + " " + textTwo);
        }else{
            count += 1;
            console.log(i);
        };
    };  
    return count;
};

console.log(logicNumber("Multiples of 3","Multiples of 5"));
