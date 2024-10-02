//function Defenition
function Msg() {
  console.log("Hi Team");
}
//function Calling without Parameter
Msg(); //undefined
Msg(); //undefined

//function Defenition with Parameter
function Msg(name) {
  console.log("Hi Team " + name);
}
//function Calling
Msg("from Masha");

//Add two numbers
function add(m, n) {
  console.log(m + n);
}
add(5, 10);

function addition(m, n) {
  let sum = m + n;
  console.log("Sum of " + m + " and " + n + " is " + sum);
  console.log(`sum of ${m} and ${n} is`, sum); //another way of printing with $ symbol no need to + symbol in this
}
addition(5, 10);
addition(23244, 34555);
