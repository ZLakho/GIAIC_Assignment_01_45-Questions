// Q: Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
var animal = ["Cat", "Dog", "Rabbits"];
for (var i = 0; i < animal.length; i++) {
    console.log(animal[i]);
}
// • Modify your program to print a statement about each animal, such as A dog would make a great pet.
for (var i = 0; i < animal.length; i++) {
    console.log("A " + animal[i] + " would make a great pet.");
}
console.log("Overall, cats, dogs, and rabbits are popular pets due to their ability to form \nstrong bonds with humans, their adaptability to different living environments, \nand their potential to provide emotional support and companionship.");
