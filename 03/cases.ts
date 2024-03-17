// Q: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
//  uppercase, and titlecase.

let persons_name = "Hamza Amin";
console.log("Name in Upper case: " + persons_name.toUpperCase());
console.log("Name in Lower case: " + persons_name.toLowerCase());
console.log("Name in Title case: " + persons_name.replace(/\b\w/g, c => c.toUpperCase()));
