// • Tests for equality and inequality with string
let name1 = "Zainab";
let name2 = "Lakho";
let name3 = "Zainab";
console.log(name1==name2) //false
console.log(name1==name3) //true
console.log(name1!=name3) //false

// • Tests using the lower case function
let name4 = "zainab";
console.log(name1==name4) /// false

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(5==5) //equal to
console.log(5!=5) // not equals to
console.log(8>5) // greater than
console.log(6<9) // less than
console.log(6>=9) // greater or equals to
console.log(6<=9) // less or equals to

// • Tests using "and" and "or" operators
let a = 7;
let b = 8;
console.log((a || b) == 7 )
console.log((a && b) != 8  )

// • Test whether an item is in a array
let items = ["glass","mobile","charger","car"];
console.log(items.includes("charger"));

// • Test whether an item is not in a array
console.log(items.includes("keychain"));
