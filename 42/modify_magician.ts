// Q: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called 
// make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s 
// name. Call show_magicians() to see that the list has actually been modified.

let magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller", "Criss Angel", "Dynamo"];
function show_magician(magicians){
    for(let i = 0; i<magicians.length ; i++){
        console.log(`The super dooper magician ${magicians[i]}`)
    }
}
function make_great(magicians) {
    let modified_magicians = [];
    for (let i = 0; i < magicians.length; i++) {
        modified_magicians.push(`The Great ${magicians[i]}`);
    }
    return modified_magicians;
}
console.log(make_great(magicians));
console.log("\n actual magicians list:\n")
console.log(magicians);
