// Q: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message 
// that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a 
// shirt of any size with a different message.
function make_shirts(size) {
    var message = " I love TypeScript";
    var message2 = "I will succeed soon";
    if (size == "medium" || size == "large") {
        console.log("The size of your shirt is ".concat(size, " and The message you wanna print is \"").concat(message, "\""));
    }
    else {
        console.log("The size of your shirt is ".concat(size, " and The message you wanna print is \"").concat(message2, "\""));
    }
}
var sizes = "Small";
make_shirts(sizes.toLowerCase());
