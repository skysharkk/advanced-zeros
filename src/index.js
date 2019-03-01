module.exports = function getZerosCount(number, base) {
  // your implementation

  let arr = [];
  
  
  function countsOfZero (number, consideredBase){
  let amountOfZero = 0;
  let factorialZero;
  
  for (let power = 1; factorialZero != 0; power++) {
  
    factorialZero =  Math.floor(number / Math.pow(consideredBase, power));
    amountOfZero += factorialZero;
  }
  return amountOfZero;
  }
  
  function amountOfZero (base, consideredBase) {
  let newBase = base;
  let j = 0;
  
  for (j = 0; newBase % consideredBase == 0; j++) {
  
   newBase /= consideredBase;
  }
  return [Math.floor(countsOfZero(number, consideredBase) / j), newBase];
  }
  
  
  
  if (base % 2 === 0){
   let result = amountOfZero (base, 2);
  
    arr[arr.length] = result[0];
    base = result[1];
  }
  
  if (base % 3 === 0){
   let result = amountOfZero (base, 3);
  
    arr[arr.length] = result[0];
    base = result[1];
  }
  
  if (base % 5 === 0){
   let result = amountOfZero (base, 5);
  
    arr[arr.length] = result[0];
    base = result[1];
  }
  
  if (base % 7 === 0){
   let result = amountOfZero (base, 7);
  
    arr[arr.length] = result[0];
    base = result[1];
  }
  
  if (base % 11 === 0){
   let result = amountOfZero (base, 11);
  
    arr[arr.length] = result[0];
    base = result[1];
  }
  
  if (base % 13 === 0){
   let result = amountOfZero (base, 13);
  
    arr[arr.length] = result[0];
    base = result[1];
  }
  
  if(base != 1  && base % 2 != 0 && base % 3 != 0 && base % 5 != 0 && base % 7 != 0 && base % 11 != 0 && base % 13 != 0) {
  
    let result = countsOfZero (number, base);
    arr[arr.length] = result;
  
  }
  
  return Math.min(...arr);
}