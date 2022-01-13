
//what is hoisting, block scope, global scope google search

let third = 10;
function sum(first,second){
    let result = first+second+third;
    //console.log(result);
    if(result>10){
        let mood = 'happy';
        mood = 'hishy';
        console.log(mood);
    }
    return result;
}

const output = sum(10,12);
console.log(third);
console.log(output);