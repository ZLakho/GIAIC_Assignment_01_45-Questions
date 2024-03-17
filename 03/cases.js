var persons_name = "Hamza Amin";
console.log("Name in Upper case: " + persons_name.toUpperCase());
console.log("Name in Lower case: " + persons_name.toLowerCase());
console.log("Name in Title case: " + persons_name.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
