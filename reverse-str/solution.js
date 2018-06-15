function solution(str){
  
var splitStr = str.split("");
var reversArray = splitStr.reverse();
var joinArray = reversArray.join("");
return joinArray;
}
solution('world');