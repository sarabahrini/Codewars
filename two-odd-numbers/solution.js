function insertDash(num) {

    var numberToString = num.toString()
    var numToArray = numberToString.split('');
    var numString = [];
 
    for (var i = 0; i< numToArray.length; i++){
     if(numToArray[i] % 2 === 1 && numToArray[i+1] % 2 === 1){
     numString += numToArray[i] + "-";
     } else{
       numString += numToArray[i];
     }
    
    }
   return numString;
 }