class NumberCounter {
    constructor(numb, value){
        this.numb = numb;
        this.value = value;
    };
    increaseCounter(){
        this.value +=  1;
    }
}

function isAnagram(wordOne, wordTwo){
    let mult = 1;
    for(let value of wordOne){
        if(wordTwo.includes(value)){
            mult *= 1;
        }else{
            mult *= 0;
        };
    };
    return mult;
};

function isIsogram(wordOne, wordTwo){
    const wordComplete = wordOne + wordTwo;
    let countArray = [];
    for(let i = 0; i < wordComplete.length; i++){
        for(let j = 0; j < wordComplete.length; j++){
            if(wordComplete[i] === wordComplete[j]){
                let doesThisValueExist = countArray.find(element => element.numb === wordComplete[i]);
                if(doesThisValueExist == undefined){
                    let newNum = new NumberCounter(wordComplete[i],1);
                    countArray.push(newNum);
                }else{
                    let letterCount = countArray.find(element => element.numb === wordComplete[j]);
                    letterCount.increaseCounter();
                };
            };
        };
    };
    const baseValue = countArray[0].value;
    let result = 1;
    for(value of countArray){
        if(value.value === baseValue){
            result *= 1;
        }else{
            result *= 0;
        };
    };
    return result;
};

function wordAnalyser(wordOne, wordTwo){
    if(wordOne === wordTwo){
        return `The words are a palindrome`
    }else if(isAnagram(wordOne,wordTwo) === 1){
        return `The words are an anagrams`
    }else if(isIsogram(wordOne, wordTwo) === 1){
        return `The words are an isograms`;
    }else{
        return `The words aren't a shit`;
    };      
};

console.log(wordAnalyser("soon","s"));
