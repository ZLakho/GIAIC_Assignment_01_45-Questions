// Q: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
// If you don’t have anything specific to write because your programs are too simple at this point, just
//  add your name and the current date at the top of each program file. Then write one sentence describing
//   what the program does.

// This program reveals my favorite number in a variable namedd message as my number is 26 and in the message variable ,birth date reveals 
// number 26
let num1 = 26;
let message1 = "Hi my name is Zainab Lakho and i am currently a student at GIAIC. I am 21 years old as my birth date is "+num1+"-04-2003";
console.log(message1)


//In this task no.6 whitespaces are aadded and special characters too in per_name variable and in console these are removed using replace method
let per_name1 = "Hamza       \nAmeen";
console.log("Before : ")
console.log(per_name1);
console.log("After : ")
console.log(per_name1.replace("      ","").replace("\n",""));