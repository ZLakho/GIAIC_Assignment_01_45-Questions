// Q: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and 
// end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the 
// name once, so the whitespace around the name is displayed. Then print the name after striping the white
//  spaces.

let per_name = "Hamza       \nAmeen";
console.log("Before : ")
console.log(per_name);
console.log("After : ")
console.log(per_name.replace("      ","").replace("\n",""));