const sumAll = function (num1, num2) {

  let sum = 0;

  if(num1 < 0 || num2 < 0){
    return "ERROR";
  }

  if(!Number.isInteger(num1) || !Number.isInteger(num2) ){
    return "ERROR";
  }

  if(isNaN(num1) || isNaN(num2) ){
    return "ERROR";
  }

  if (Array.isArray(num1) || Array.isArray(num2)) {
    return "ERROR";
  }

  if (num1 <= num2) {

    for (let i = num1; i <= num2; i++) {
      sum += i;
    }

  } else {

    for (let i = num1; i >= num2; i--) {
      sum += i;
    }

  }

  return sum;

};

sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;
