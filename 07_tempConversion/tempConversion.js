const ftoc = function(temp) {
let newTemp = 0;
newTemp = ((temp -32)/1.8).toFixed(1);
return Number(newTemp);
};

const ctof = function(temp) {
  let newTemp = 0;
newTemp = (temp * 1.8 + 32).toFixed(1);
return Number(newTemp);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
