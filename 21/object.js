var object = {
    cities: ["New York", "London", "Tokyo", "Paris", "Dubai", "Sydney"]
};
// way 1 to print items in objects
console.log("Items inn typescript objects are : " + object.cities);
// way 2 to print items in objects
console.log("\n\nAnother way to print items from objects: ");
for (var item in object) {
    console.log(object[item]);
}
