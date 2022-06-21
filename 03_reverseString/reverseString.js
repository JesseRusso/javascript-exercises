const reverseString = function(text) {
let textArray = text.split('').reverse();
let revWords = "";
for(let i = 0; i < textArray.length; i++){
    revWords += textArray[i];
}
return revWords;
};

// Do not edit below this line
module.exports = reverseString;
