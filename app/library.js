module.exports = {
getPrime: function(n) {
 var x= 3,j,i=2, primeArr=[2],isPrime;          
 for (;x<=n;x+=2){ j = (int) Math.sqrt (x); isPrime = true; 
 for (i = 2; i <= j; i++) { 
 if (x % i == 0){ 
 isPrime = false;
 break; 
 }
 } 
 if(isPrime){ 
 primeArr.push(x); 
 }
 } 
 return primeArr; 
 }
}
