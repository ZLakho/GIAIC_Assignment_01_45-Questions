var magicians1 = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller", "Criss Angel", "Dynamo"];
function show_magicians(magicians1) {
    // for (let i = 0; i < magicians1.length; i++) {
    //     return ` ${magicians1[i]}`;
    // }
    return magicians1;
}
function make_great(magicians1) {
    var modified_magicians = [];
    for (var i = 0; i < magicians1.length; i++) {
        modified_magicians.push("The Great ".concat(magicians1[i]));
    }
    return modified_magicians;
}
console.log("Original Magicians:" + show_magicians(magicians1.slice()));
console.log("\nModified Magicians:" + make_great(magicians1.slice()));
;
