// Q: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a 
// copy of the array of magicians’ names. Because the original array will be unchanged, return the new 
// array and store it in a separate array. Call show_magicians() with each array to show that you have one 
// array of the original names and one array with the Great added to each magician’s name.


let magicians1 = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller", "Criss Angel", "Dynamo"];

function show_magicians(magicians1) {
    // for (let i = 0; i < magicians1.length; i++) {
    //     return ` ${magicians1[i]}`;
    // }
    return magicians1;
}

function make_great(magicians1) {
    let modified_magicians = [];
    for (let i = 0; i < magicians1.length; i++) {
        modified_magicians.push(`The Great ${magicians1[i]}`);
    }
    return modified_magicians;
}
console.log("Original Magicians:" + show_magicians(magicians1.slice()));
console.log("\nModified Magicians:" + make_great(magicians1.slice()));
;
