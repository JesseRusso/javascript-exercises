const sumAll = function(num1, num2) {
let finalNum = 0;
let min = Math.min(...arguments);
let max = Math.max(...arguments);

if(typeof arguments[0] === 'number' && typeof arguments[1] === 'number'){
    if(min > 0 && max >0){
        for(let i = 0; i <= max; i++){
            finalNum += i;
        }
        return finalNum;
    }
}
return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
