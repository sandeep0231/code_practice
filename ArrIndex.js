// --------------Infinite curryning------------
const CurSum = (a) => {
  return function (b) {
    if (b) return CurSum(a + b);
    return a;
  }
}
console.log(CurSum(1)(2)(2)());
// --------------Sorting an array withour inbuilt bubble sort approch------------
const StArr = [1, 9, 2, 6, 4, 3];
for (let i = 0; i <= StArr.length - 1; i++) {
  for (let j = 0; j <= StArr.length - 1; j++) {
    if (StArr[i] < StArr[j]) {
      temp = StArr[i];
      StArr[i] = StArr[j];
      StArr[j] = temp;
    }
  }
}
console.log(`Array sorted is : ${StArr}`);
// --------Binary search algorithm----------------------
function BSFun(ar, target) {
  Lindex = 0; Rindex = ar.length - 1;
  while (Lindex <= Rindex) {
    let midIndx = Math.floor((Lindex + Rindex) / 2);
    if (ar[midIndx] === target) return true;
    else if (ar[midIndx] < target)
      Lindex = midIndx + 1;
    else
      Rindex = midIndx - 1;
  }
  return false;
}
const ar = [1, 2, 4, 6, 9, 10];
console.log(BSFun(ar, 10));

// ---------------binary search with recursion function-----------------------
function RecursionBSF(arr, target, left, right) {
  if (left > right) { return false; }
  mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) { return true; }
  else if (arr[mid] > target) {
    return RecursionBSF(arr, target, left, mid - 1);
  } else {
    return RecursionBSF(arr, target, mid + 1, right);
  }
  return false;
}
const arr = [1, 2, 4, 6, 9, 10], target = 10, left = 0, right = arr.length - 1;
console.log(RecursionBSF(arr, target, left, right));

// ------------- Print All Numbers Divisible by 3 and 5 of a Given Number-------------------
const DivisionBy3And5 = (n) => {
  let Arr = [], count = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      Arr[count] = i;
      count++;
    }
  }
  return Arr;
}
console.log(DivisionBy3And5(50));

// -----------Finding union of  two array -------------
const UnionArFun = (ar1, ar2) => {
  const obj = {}, result = [];
  // let arr =[...ar1, ...ar2];
  // return arr;
  for (let i = 0; i <= ar1.length - 1; i++) {
    obj[ar1[i]] = true;
  }
  for (let j = 0; j <= ar2.length - 1; j++) {
    obj[ar2[j]] = true;
  }
  for (x in obj) {
    result.push(x);
  }
  return result;
}
const ar1 = [1, 2, 4, 5, 6, 7], ar2 = [3, 4, 7, 8, 9, 10];
console.log(UnionArFun(ar1, ar2));

// --------find a factorial of given num with recursion----------
const FactRe = (num) => {
  if (num <= 0) return 1;
  return num * FactRe(num - 1);
}
let num = 2;
console.log(`Factorial of ${num} is : ${FactRe(num)}`);

// -----------convert  decimal to binary -------------
function convertDecimalToBinary(Dnum) {
  if (Dnum === 0) { return "0"; }
  else {
    return convertDecimalToBinary(
      Math.floor(Dnum / 2)) + (Dnum % 2);
  }
}
let Dnum = 6;
let response = convertDecimalToBinary(Dnum);
console.log(response);

// function ConvertDecimalToBinary1(decimalNumber) { 
//   if (decimalNumber === 0) { 
//       return "0"; 
//   } else { 
//       return ConvertDecimalToBinary1( 
//           Math.floor(decimalNumber / 2)) + (decimalNumber % 2); 

//   } 
// } 

// const num1 = 2; 
// const result = ConvertDecimalToBinary1(num1); 
// console.log(result);

// =========================================
const Ars = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let count = 0; ParArr = [];
for (let i = 0; i <= Ars.length - 1; i++) {
  for (let j = i + 1; j <= Ars.length - 1; j++) {
    if (Ars[i] + Ars[j] === 100) {
      ParArr[count] = [Ars[i], Ars[j]];
    }
  }
  count++;
}
console.log(ParArr);

// find sqare root values 
const ArrN = [2, 4, 16, 15, 9, 25, 10];
const newArp = [];
for (let i = 0; i <= ArrN.length - 1; i++) {
  var b = (ArrN[i] ** 0.5) ** 2;
  if (b % 1 === 0) {
    newArp.push(b);
  }
}
console.log(newArp);


// =========================================
// missing number in an array
function MissingNum(Arr) {
  for (let i = 0; i <= Arr.length - 1; i++) {
    for (let j = 0; j <= Arr.length - 1; j++) {
      if (Arr[i] <= Arr[j]) {
        temp = Arr[i];
        Arr[i] = Arr[j];
        Arr[j] = temp;
      }
    }
  }
  let len = Arr[Arr.length - 1];
  let missingEles = [], flag = 0;
  for (k = 1; k <= len; k++) {
    if (Arr.includes(k) === false) {
      missingEles[flag] = k;
      flag++;
    }
  }
  return missingEles;
}
let Arr1 = [3, 4, 9, 7, 2];
console.log(MissingNum(Arr1));


// =========================================
const FSFun = (n) => {
  let num1 = 0, num2 = 1, nextNum;
  for (let i = 1; i <= 10; i++) {
    console.log(num1);
    nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum;
  }
  return 0;
}
FSFun(n = 10);


// =========================================
//  1
//  2  3
//  4  5  6
//  7  8  9  10
//  11  12  13  14  15
//  16  17  18  19  20  21  expected output 
let nums = 6; let str = ''; count = 1;
for (let i = 1; i <= nums; i++) {
  for (let j = 1; j <= i; j++) {
    str += ` ${count} `;
    count++;
  }
  str += '\n';
}
console.log(str);


// =========================================
var str1 = "zzzzeewttttaaq";
let obj = {};
let OutputStr = '';
// ttzzzeemmnna
let Arr = []; let count1 = 0;
for (let val of str1) {
  Arr[count1] = val;
  count1++;
}
// console.log(Arr);
for (let i = 0; i <= Arr.length - 1; i++) {
  if (obj[Arr[i]]) {
    obj[Arr[i]] = obj[Arr[i]] + 1;
  }
  else {
    obj[Arr[i]] = 1;
  }
}
console.log(obj);
let newObj = Object.keys(obj).sort().reduce((temp_obj, key) => {
  temp_obj[key] = obj[key];
  return temp_obj;
}, {});
console.log(newObj);

let ArrObj = Object.entries(newObj);
// console.log(ArrObj);
for (let i = 0; i <= ArrObj.length; i++) {
  for (let j = i + 1; j <= ArrObj.length; j++) {
    if (ArrObj[j] && (ArrObj[i][1] < ArrObj[j][1] || ArrObj[i][0] > ArrObj[j][0])) {
      let temp = ArrObj[i];
      ArrObj[i] = ArrObj[j];
      ArrObj[j] = temp;
    }
  }
}
for (let i = 0; i <= ArrObj.length - 1; i++) {
  for (let j = 0; j < ArrObj[i][1]; j++) {
    OutputStr += ArrObj[i][0];
  }
}
console.log(str1);
console.log(OutputStr);

// =========================================
// sort Arr element by strings length
let StrArr = ['abc', 'xyzk', 'mnopqr', 'sa'];
for (let i = 0; i <= StrArr.length - 1; i++) {
  for (let j = i + 1; j <= StrArr.length - 1; j++) {
    if (StrArr[i].length < StrArr[j].length) {
      let temp = StrArr[i];
      StrArr[i] = StrArr[j];
      StrArr[j] = temp;
    }
  }
}
console.log(StrArr);

// =========================================
// Permutation of combination
const permute = function (prefix, str) {
  ; var n = str.length
  if (n == 0) {
    console.log(prefix + "");
  }
  if (n != 0) {
    for (let i = 0; i < n; i++) {
      permute(prefix + str.charAt(i),
        str.substring(i + 1, n) + str.substring(0, i))
    }
  }
}
console.log(permute("", "ABC"));

// =========================================
str = "abacedcae";
// output-> bda
let arry = [];
for (let i = 0; i <= str.length - 1; i++) {
  if (!arry.includes(str[i])) {
    arry.push(str[i]);
  }
  else if (arry.includes(str[i]) === true) {
    let indexEle = arry.indexOf(str[i]);
    arry.splice(indexEle, 1);
  }
}
console.log(arry.join(''));


// =======================================
let Arry = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let flg = 2;
let NArr = [];
for (let i = Arry.length - 1; i >= 0; i--) {
  // console.log(Arr[i]);
  if (flg > 0) {
    NArr.push(Arry[i]);
    flg--;
    Arry.splice(i, 1);
  }
}
let fArr = [...NArr.reverse(), ...Arry];
console.log(fArr);


// ================================================
// find the sum of strings element (by element existing array position and alphabetic position)
// 1)
let arrys = ['a', 'b', 'e', 'c']; var res = 0;
for (let i = 0; i <= arrys.length - 1; i++) {
  let code = arrys[i].toUpperCase().charCodeAt(arrys[i]);
  let concateVals = (i + 1) * (code - 64);
  res = res + concateVals;
}
console.log(res);
// ====================================
// 2)
function countSum(arr) {
  var res = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    let code = arr[i].toUpperCase().charCodeAt(arr[i]);
    let concateVals = (i + 1) * (code - 64);
    res = res + concateVals;
  }
  return res;
}
function MatchStrings(str1, str2) {
  return (countSum(str1.split('')) === countSum(str2.split(''))) ? true : false;
}
console.log(MatchStrings('abc', 'abcd'));


//==========================================================
// check two strings IsoMorphic
function isomorphic(str1, str2) {
  if (str1.length !== str2.length) { return false; }
  let obj = {};
  for (let i = 0; i < str1.length; i++) {
    if (!obj[str1[i]]) {
      obj[str1[i]] = str2[i];
    }
    else {
      if (obj[str1[i]] !== str2[i]) {
        return false;
      }
    }
  }
  return true;
}
let s = "paper"
let t = "title"
console.log(isomorphic(s, t));


// ==========================================================
//  check Pangram
function CheckPangram(strings) {
  let Alpha = 'abcdefghijklmnopqrstuvwxyz';
  let flag = true;
  for (let i = 0; i <= Alpha.length - 1; i++) {
    if (strings.includes(Alpha[i]) == false) {
      flag = false;
    }
  }
  return flag;
}
let strings = "The quick brown fox jumps over the lazy  dog";
console.log(CheckPangram(strings));

// ================================================================
// Count the Vowels from  strings
const CountVowels = (Str) => {
  let vowels = "aeiou"; let count = 0;
  for (let i = 0; i <= Str.length - 1; i++) {
    if (vowels?.includes(Str[i].toLowerCase())) {
      count += 1;
    }
  }
  return count;
}
let Strs = "HELLO";
console.log(CountVowels(Strs));

// =====================================================================
// convert a lowercase char into a uppercase and as well as uppercase to lowercase in given string
const ConvertChars = (str) => {
  newSt = '';
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90) {
      let Asii = str[i].charCodeAt(0) + 32;
      newSt += String.fromCharCode(Asii);
    }
    else if (str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122) {
      let Asii1 = str[i].charCodeAt(0) - 32;
      newSt += String.fromCharCode(Asii1);
    }
  }
  return newSt;
}
console.log(ConvertChars("HEllo"));


// =============================================================
// convert nested array into a flat array without inbuild function 
let Farr =[];
function  FlatArr(ar) {
    for(let i =0; i<=ar.length-1;i++){
        if(typeof (ar[i]) == 'object') {
            FlatArr(ar[i]);
        } else {
          Farr.push(ar[i]); 
        }  
    }
return Farr;
}
let Far =[1, 2, 3,[12,31,22], 4, [5, 6, [6, 7], 7, 8]];
console.log(FlatArr(Far));

// ===============================================================
 // Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

const Matrix = (mat) => {
    
  let GlobalArr = [];
  let chlidArr =[];
  let r = mat?.length;
  let c = mat[0].length;
//  console.log(r,c);

  for(let j=0; j<c;j++){
  // console.log(mat[i]);
  for(let i=r-1; i>=0; i--) {
  //   console.log(mat[i][j]) 
     chlidArr.push(mat[i][j]);
  }
  // console.log("==============");
  GlobalArr.push(chlidArr);
  chlidArr=[];
}
return GlobalArr;
}
let matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(Matrix(matrix));

// =========================================================


let arrN =[1,1,3,3,4,4];
for(let i=0; i<=arrN.length-1; i++) {
   for(let j=i+1; j<=arrN.length-1;j++) {
       if(arrN[i]==3 || arrN[i]== '-') {
           arrN[i] = '-'
       temp = arrN[i];
       arrN[i] =arrN[j];
       arrN[j] = temp;            
       }
   }
}
console.log(arrN);

// ===========================================================

const FindDuplicateElement = (array) =>{
  let obj ={}; let dup = [];
 for(let i=0; i<=array.length-1; i++) {
     if(obj[array[i]]) {
        obj[array[i]] = obj[array[i]]+1; 
        if(dup.indexOf(array[i]) ==-1) {
            dup.push(array[i]);
        }
     } else {
         obj[array[i]] =1;
     }     
 } 
 return dup;  
}
console.log(FindDuplicateElement([1, 2, 3, 6, 3, 6, 1]));

// ===========================================================
function DuplicateElementFind (arr) {
  let dup = [];
for(let i =0; i<=arr.length-1; i++) {
  for (let j= i+1; j<=arr.length-1; j++) {
      
      if(arr[i] == arr[j]  && !dup.includes(arr[i]) ) {
          dup.push(arr[i]);
      }
  }
}
return dup;
}
console.log( DuplicateElementFind([-1,4,2,3,2,-1,]));
// =============================================================
// Find largest element from array without sorting.
let FindLargestElement = (ar) =>{
    let largest =ar[0];
    for(let i=0; i<=ar.length-1; i++){
        if(largest<ar[i]) {
            largest =ar[i];
        }
    }
    return largest;
} 
console.log(FindLargestElement([1,-6,-4,8,3,15,5,-1]));

// =============================================================
// Find smallest element from array without sorting.
let FindSmallestElement = (ar) =>{
    let smallest =ar[0];
    for(let i=0; i<=ar.length-1; i++){
        if(smallest>ar[i]) {
            smallest =ar[i];
        }
    }
    return smallest;
} 
console.log(FindSmallestElement([1,-6,-4,8,-10,5,-1]));
// ============================================================

// Find smallest and largest value at a time .
let LargeAndSmallElement = (ar) =>{
    let large = ar[0]; let small = ar[0];
    for(let i=0; i<=ar.length-1; i++) {
        if(large< ar[i]) {
            large = ar[i];
        }
        else if(small>ar[i]) {
            small =ar[i];
        }
    }   
  return {'largest value is':large, 'smallest value is':small};
}
console.log( LargeAndSmallElement ([1,3,9,-1,4]) );

// =============================================================
let Anagrame = (str1,str2) =>{
    if(str1.length !=str2.length) { return false;}
    let obj ={};
    for(let i=0; i<=str1.length-1; i++) {
        if(obj[str1[i]]) {
           obj[str1[i]] =obj[str1[i]]+1; 
        } else {
            obj[str1[i]] =1;
        }
    }
    
    for(const val of str2) {
        if(!obj[val]) {
           return false;
        } 
       obj[val] -=1;
        
    }
   return true;
}
console.log(Anagrame("listen","silent"));

// =============================================================
let palindrome = (str) =>{
    left=0; right = str.length-1;
    
   while(left<right) {
    if(str[left] !== str[right]) return false;
    left++;
    right--;
   }    
    return true;
}
console.log(palindrome("level"));

// =============================================================
// Implement a function to remove duplicates from an array. 
let RemoveDuplicateElement = (ar) =>{
    let uniqueArr =[]; let flag =0;
    for(let i=0; i<=ar.length-1; i++) {
        if(uniqueArr.indexOf(ar[i]) ==-1) {
        uniqueArr[flag] = ar[i]; 
         flag++;
        }
    }
    return uniqueArr;
}

console.log(RemoveDuplicateElement([1,5,9,2,1,5]) );

// =============================================================
let arr =[1,4,8,9,3,0,5];
const quicksort =(arr) =>{
    if(arr.length-1 <0) {
        return arr;
    }
    
    let pivet =arr[arr.length-1];
let left =[]; let right= [];
for (let i=0; i<=arr.length-2; i++){
    if(arr[i]<pivet) {
        left.push(arr[i]);
    } else {
        right.push(arr[i]);
    }
}
return [...quicksort(left),pivet,...quicksort(right)];
    
}

console.log(quicksort(arr));
// =============================================================
function maxSubArray(nums) {
    let result=Number.MIN_VALUE;
    let temp=0
    for(let i=0;i<nums.length;i++)
    {
        temp+=nums[i] 
        if(temp>result){
            result=temp
        }
        if(temp<0){
            temp=0
        }
    }
  return result
}

// Example usage
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums)); // Output: 6 (subarray: [4, -1, 2, 1])


// =============================================================
function Fibonacci(num) {
    let num1 =0; let num2=1; let nextnum;
   let FeboArr =[];
    for(let i=1; i<=num; i++ ) {
        FeboArr.push(num1);
        nextnum = num1+num2;
        num1 = num2;
        num2 = nextnum;
    }
    return FeboArr;
}
console.log(Fibonacci(10));

// =============================================================
const ArmstonNumber = (number) =>{
   number = number.toString();
let temp=0;
for(i=0; i<=number.length-1; i++) {
temp += number[i]*number[i]*number[i];
}
if(temp ==number) return true;
return false;
}
console.log(ArmstonNumber(153));

// =============================================================
//Find secound highest element from array-

function SecoundHighVal (ar) {
let first =ar[0];
let secunde =ar[0];
for(let i=0; i<=ar.length-1; i++) {
     if(ar[i]>first) {
         secunde = first;
        first = ar[i];
    }  
 else if(ar[i] > secunde) {
     secunde  =ar[i];
 }
}
return secunde;
}
console.log( SecoundHighVal([2,13,3,5,1,8,2]));

// =============================================================
function IsPrimeNumber (num) {
    if(num <=1) return false; 
    
    for(let i =2;  i<num; i++) {
        if(num % i ==0) {
            return false;
        }
    }
    return true;
}
console.log( IsPrimeNumber(29) );
// =============================================================
function maxProductOfTwoEle (arr) {
   let firstEle = arr[0];
   let    secoundEle = arr[0];
    for (let i=0; i<=arr.length-1; i++) {
        if(arr[i] > firstEle ) {
            secoundEle = firstEle;
            firstEle = arr[i];
        } 
        else if(arr[i] > secoundEle) {
            secoundEle = arr[i];
        }
    }
    return   firstEle * secoundEle;
}
console.log(maxProductOfTwoEle([2,9,5,3,2]) );

// =============================================================

// =============================================================

// =============================================================

// =============================================================

// =============================================================

// =============================================================

// =============================================================

// =============================================================

// =============================================================

// =============================================================

// =============================================================

// =============================================================

// =============================================================

// =============================================================

// =============================================================

// =============================================================

// =============================================================

// =============================================================

// =============================================================
// let arrN =[1,1,3,3,4,4];
// let ar=[]; let ar1 =[];
// for(let i=0; i<=arrN.length-1; i++) {
//     // console.log(arrN[i]);
//     if(arrN[i]==3) {
//         ar1.push(3);
//     } else {
//         ar.push(arrN[i]);
//     }
// }
// let NewArr =[...ar,...ar1];
// console.log(NewArr,ar.length);


