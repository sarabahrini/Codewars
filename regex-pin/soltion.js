function validatePIN (pin) {
    //return true or false
    return /^(\d{4}|\d{6})$/.test(pin);
    }
  //   if (pin.length === 4 || pin.length === 6){
  //   return true;
  // } else{
  // return false;
  // }
  // }