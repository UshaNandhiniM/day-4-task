//Task 1 
//a.Print odd numbers in an array using anonymous function
/*var result=[]
function odd(array){
    for(var i = 0 ; i< array.length ; i++)
    {
          if(array[i]%2!=0)
          {
             result.push(array[i])
          } 
     }
return result
  }
  console.log(odd([1,2,3,4,]));
*/

//Print odd numbers in an array using IIFE
/*
(function(array){
    for(var i = 0 ; i< array.length ; i++){
               if(array[i]%2!=0){
                  console.log(array[i])
               } 
          }
    })([1,2,3,4])
    */
//b.Convert all the strings to title caps in a string array using anonymous function & IIFE
//1.
/*function title(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  }
  console.log(title("USHA IS MY NAME"));
*/
//2.
/*function title(str1) {
    str1 = str1.toLowerCase().split(' ');
    for (var i = 0; i < str1.length; i++) 
    {
      str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1); 
    } 
    return str1.join(' ');
  }
  console.log(title("USHA IS MY NAME"));
*/


//c.Sum of all numbers in an array using anonymous function & IIFE

//1.
/* 
function sum(array){
    var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
       sum = sum + array[i];
     }
     return sum;
  }
  console.log(sum([1,2,3,4]));
  */
//2.
/*
function sum(array)
{
    var sum=0;
    for(var i=0;i<array.length;i++)
    {
        sum = sum + array[i];
     }
     return sum;
  }
  console.log(sum([1,2,3,4]));
*/

//d.Return all the prime numbers in an array using anonymous function & IIFE
//1.
/*
function prime(numArray){
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    console.log(number[1,2,3,4,5,6,7,8,9,10]);
}
*/
//2.
/*
function prime(numArray)
{
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) 
      {
        if (number % i === 0) return false;
      }
      return true;
    });
    console.log(numArray([1,2,3,4]));
}
*/

//E.Return all the palindromes in an array using anonymous function & IIFE
//1
/*function palindrome(arr, n)
    {
        for (let i = 0; i < n; i++)
        {
            let ans = palindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }
    console.log(palindrome[1,2,3,4,5,6,7,8,9,10]);
*/
//2.
/*
(  function isPalindrome(arr, n)
{
    for (let i = 0; i < n; i++)
    {
        let ans = isPalindrome(arr[i]);
        if (ans == false)
            return false;
    }
    return true;
})([1,2,3] , 3)
*/
//Return median of two sorted arrays of the same size.
//1.
/*function arr(array){
  let dup = [...new Set(array)];
  console.log(dup);
}([1,1,2,3,4])
//2.
(function (array){
  let dup = [...new Set(array)];
  console.log(dup);
 })([1,2,3,4])
 */

//Task 2
//A.Print odd numbers in an array using arrow function
/*
var result =[];
 var odd=(arr)=>{
  for(var i=0;i<arr.length;i++){
    if(arr[i]%2!==0)
    {
         result.push(arr[i])
    }
  }
  return result
}
console.log(odd([1,2,3,4]));
*/

//B.Convert all the strings to title caps in a string array using arrow function

/*titleCase = (str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) 
    {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  }     
  console.log(titleCase("USHA IS MY NAME"));
  */

//C.Sum of all numbers in an array using arrow functions.

/*
 sum=(array)=>
{
    var sum=0;
    for(var i=0;i<array.length;i++)
    {
        sum = sum + array[i];
     }
     return sum;
  }
  console.log(sum([1,2,3,4]));
  */

//d.Return all the prime numbers in an array using arrow functions.
/*
primeNumber = (numArray) => {
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    console.log(numArray);
}
*/

//E.Return all the palindromes in an array using arrow functions.
/*Palindrome = (arr, n) =>
    {
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    };console.log(Palindrome(1,2,3,4)(3));
    */
