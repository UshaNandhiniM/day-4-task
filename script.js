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

/*let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
b = function(...a) {
for (let i = 0; i <a.length; i++) 
{
for (let j = 2;j <= a[i]-1;j++)
 {
if (a[i] % j == 0) {
return false;
}
}
return a[i] > 1;
};
};
console.log(a.filter(b));

*/

//2.
/*
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
(prime = function(a) {
  for (let j = 2; j <= a -1; j++) {
  if (a % j == 0) {
  return false;
  }
  }
  return a > 1
  })();
  console.log(a.filter(prime))
*/
//E.Return all the palindromes in an array using anonymous function & IIFE
//1
/*
let arr = ['aha', 'raghu', 'gaag', 'hello', 'jooj', 'kook'];
let palin = function(arr) {
let c = [];
for (let i = 0; i < arr.length; i++){
let strarr = arr[i]
let revstr = strarr.split('').reverse().join('');
if (strarr == revstr) {
c.push(strarr);
}
}
console.log(c);
}
palin(arr);
*/
//2.
/*
let arr = ['aha', 'raghu', 'gaag', 'hello', 'jooj', 'kook'];
(function(arr) {
let c = [];
for (let i = 0; i < arr.length; i++) {
let strarr = arr[i]
let revstr = strarr.split('').reverse().join('');
if (strarr == revstr) {
c.push(strarr);
}
}
console.log(c);
})(arr);
*/
//Return median of two sorted arrays of the same size.
//1.
/*let arr1 = [45, 56, 23, 78, 89, 57, 70];
let arr2 = [23, 56, 78, 90, 80, 32, 67];
let med = function(arr1, arr2) {
let l = arr1.length;
arr1.sort(function(a, b) { return a - b });
arr2.sort(function(a, b) { return a - b });
console.log(arr1, arr2);
if (arr1.length % 2 === 0) {
console.log((arr1[l / 2] + arr1[l / 2-1]) / 2)
console.log((arr2[l / 2] + arr2[l / 2-1]) / 2)
}
else {
console.log((arr1[(l - 1) / 2]))
console.log((arr2[(l - 1) / 2]))
}
};
med(arr1, arr2);
*/
//2.
//IIFE function
/*
(function(arr1, arr2) {
let l = arr1.length;
//sorting the arr in ascending order
arr1.sort(function(a, b) { return a -b });
arr2.sort(function(a, b) { return a - b });
console.log(arr1, arr2);
if (arr1.length % 2 === 0) {
console.log((arr1[l / 2] + arr1[l / 2-1]) / 2)
console.log((arr2[l / 2] + arr2[l / 2-1]) / 2)
}
else {
console.log((arr1[(l -1) / 2]))
console.log((arr2[(l - 1) / 2]))
}
})(arr1, arr2);
*/
//g. Remove duplicates from an array
//1.
/*
let arr = [1, 2, 2, 2, 4, 6, 6, 6, 7, 7, 8, 8, 8, 8, 8, 9, 22, 4, 4, 567, 67, 78, 78, 45, 67, 45, 45, 45, 78, 67, 56, 54];
let dup = function(arr) {
let newarr = [...new Set(arr)];
console.log(newarr);
}
dup(arr);
*/
//IIFE function
//2.
/*
(function(arr) {
let newarr = [...new Set(arr)];
console.log(newarr);
})(arr)
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
console.log(odd([1,2,3,4,5,6,7]));
*/

//B.Convert all the strings to title caps in a string array using arrow function
/*
titleCase = (str) => {
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
/*let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
let prime = (num) => {
for (let j = 2; j < num- 1; j++) {
if (num % j === 0) {
return false;
}
}
return num > 1;
}
console.log(a.filter(prime));
*/
//E.Return all the palindromes in an array using arrow functions.
let arr = ['aha', 'raghu', 'gaag', 'hello', 'jooj', 'kook'];
let palin = (str) => {
revstr = str.split('').reverse().join('');
if (str == revstr) {
return str;
} else {
return false;
}
}
console.log(arr.filter(palin));