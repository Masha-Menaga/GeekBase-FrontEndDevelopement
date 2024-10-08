let arrayName = [10, 20, 30, 40, 50];
console.log(arrayName);

//Change the Array Value
//So that Arrayis Called Mutable One
arrayName[2] = 35;
console.log(arrayName);
console.log(arrayName[1]);

//Create an Array
const newArray = new Array(2, 3, 56, 9, 12); //old Method
console.log(newArray);

const numArray = [2, 3, 56, 9, 12]; //New Method
console.log(numArray);

numArray[2] = numArray[2] * 10; //change Particular Value
console.log(numArray);

console.log(numArray.length); //array Length

const arr = [];
console.log(arr);
arr.push("Masha"); //adding Value to an Array
arr.push("Sree");
arr.push("Raghu");
console.log(arr);

//JOIN umber to String
let str = numArray.join(", "); //opp for split
console.log(str);

//Delete - POP
arr.pop(); // POP -last value
console.log(arr);
let deleteValue = arr.pop(); //check What is POP
console.log(deleteValue);
console.log(arr);

//Shift
arr.shift(); // pop the First element
console.log(arr);

//UnShift
arr.unshift("Ragul"); // push the First ELement
console.log(arr);

//Concadinate
let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
let num3 = [7, 8, 9];
let total = num1.concat(num2);
console.log(total);
total = num1.concat(num2, num3); // another way
console.log(total);

//Slicing
let slicedArr = numArray.slice(); //print all
console.log(slicedArr);
slicedArr = numArray.slice(2); //print start the array index 2
console.log(slicedArr);
slicedArr = numArray.slice(2, 4); //when 2-4(4-1) index
console.log(slicedArr);

//splice
let splicedarr = numArray.splice(); //delete all element
console.log(splicedarr);
splicedarr = newArray.splice(2, 1); //delete the element 2 index 1 is count how many element next to 2
console.log(splicedarr); //its shows only deleted elemnt
console.log(newArray); // other element is in the original array.
console.log(newArray.splice(2, 1, "Masha", "Menaga"));
console.log(newArray); //add the elemnt where it deleted

//Searching
console.log(newArray.indexOf("Masha"));

console.log(newArray.includes("Masha"));

//Sotring
let num = [23, 9, 0, 986, 9];
let str1 = ["Sree", "Ragul", "Masha"];
str1.sort(); //String Sort
console.log(str1);
num.sort();
console.log(num);

//Reverse
let rev = str1.reverse();
console.log(rev);

//String Rverse Program
let str2 = "Java Script";
let str3 = str2.split(""); //convert to array
console.log(str3);
let reverse = str3.reverse(); //array reverrse
console.log(reverse);
console.log(reverse.join("")); //convert to string
