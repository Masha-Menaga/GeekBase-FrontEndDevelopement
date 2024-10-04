//Declaring a String
let Name = "Masha";
console.log(Name);

//Find the Charcter of the Index
// charAt
console.log(Name.charAt(0));
//Index always Strats at 0

console.log(Name.charAt(4));
Name[4] = "A"; // We can able to change but its not affected in original String Thats y its called IMMUTABLE
console.log(Name);
//but able to change and store it in new variable and access
//but it cant change the original thing
//we can acheive with REPLACE method
newstr = console.log(Name.replace("h", "H")); //This is the Shortest FOrm of Next 2 line(Assign and Print)
newStr = Name.replace("M", "m"); //Assign the replace Value to new Variable
console.log(newStr); //Print the new Variable
console.log(Name); //Print The original Value and check its not Affected

//At(at is the Newest Version of charAt its takes the Negative Values too )
console.log(Name.charAt(-3)); // Its not work Bcs charAt does not accept Negative Value
console.log(Name.at(-3));
console.log(Name.at(-5)); // when mention '-' Its calculate the Value from last to first

//SubString
console.log(Name.substring(2));
console.log(Name.substring(2, 5));

//Slice
console.log(Name.slice(-3)); // same as substring Slicing have negative values
console.log(Name.slice(-5, -1));

//To Upper Case
console.log(Name.toUpperCase());

//To Lower Case
console.log(Name.toLowerCase());

//Concadinate String
console.log(Name + " Menaga"); //Old Version
console.log(Name.concat(" Menaga", " Masha")); //Newer Version

//TRIM
console.log(Name.trim());
var newName = " Menaga  ";
console.log(newName); //before Trim
console.log(newName.trim());

//Replace
console.log(Name.replace("a", "A")); // it changes the first a in your string

//Replace All
console.log(Name.replaceAll("a", "A")); // change the all a to A

//Split
let greet = "Good-Evening-Friends";
console.log(greet.split("-"));
let greet1 = "Good Evening Friends";
console.log(greet1.split(" "));

//Index Of
console.log(greet.indexOf("e")); // It Check e only it not Consider E as e

//Last Index Of
console.log(greet.lastIndexOf("e")); // It check the Last e in the String

//Includes
console.log(greet.includes("Evening")); //Boolean true
console.log(greet.includes("evening")); // False

//Starts With
console.log(greet.startsWith("Good")); //true
console.log(greet.startsWith("Go")); // true

//Ends With
console.log(greet.endsWith("ds")); //true
console.log(greet.endsWith("Friends")); //true

//Repeat
console.log("*".repeat(10));
console.log(greet.repeat(10));
