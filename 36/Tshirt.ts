// Q: T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size,message){
    console.log(`The size of your shirt is ${size} and The message you wanna print is "${message}"`);
}
let size = "medium";
let message = "Control your ego it ruins everything;;;)";
make_shirt(size,message);