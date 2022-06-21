const removeFromArray = function(inputArray) {
    const nums = inputArray;
    for(let i = 1; i < arguments.length; i++){
        if(nums.indexOf(arguments[i]) > -1){
            let newArray = nums.splice(nums.indexOf(arguments[i]), 1);
        } 
    }

    return nums;
}
// Do not edit below this line
module.exports = removeFromArray;
