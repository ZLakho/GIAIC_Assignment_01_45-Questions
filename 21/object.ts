// Q: They think of something you could store in a TypeScript Object. Write a program that creates Objects
//  containing these items.

let object = {
    cities : ["New York", "London", "Tokyo", "Paris", "Dubai", "Sydney"]
};
// way 1 to print items in objects
console.log("Items inn typescript objects are : "+ object.cities)
// way 2 to print items in objects
console.log("\n\nAnother way to print items from objects: ")
for (let item in object){
    console.log(object[item])
}