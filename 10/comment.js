// This program reveals my favorite number in a variable namedd message as my number is 26 and in the message variable ,birth date reveals 
// number 26
var num1 = 26;
var message1 = "Hi my name is Zainab Lakho and i am currently a student at GIAIC. I am 21 years old as my birth date is " + num1 + "-04-2003";
console.log(message1);
//In this task no.6 whitespaces are aadded and special characters too in per_name variable and in console these are removed using replace method
var per_name1 = "Hamza       \nAmeen";
console.log("Before : ");
console.log(per_name1);
console.log("After : ");
console.log(per_name1.replace("      ", "").replace("\n", ""));
