var Bigger_table = ["Zainab lakho", "Asma Aslam", "Tasbiha Naz", "Rameen Iqbal", "Sadia Ajmal"];
for (var i = 0; i < Bigger_table.length; i++) {
    if (Bigger_table[i] == "Tasbiha Naz") {
        console.log("Dear " + Bigger_table[i] + ", I have a found a bigger table for dinner, let's meet.");
        console.log("--> " + Bigger_table[i] + ": Sorry dear i can't make it.");
    }
    else {
        console.log("Dear " + Bigger_table[i] + ", I would like to invite you for dinner.");
    }
}
// adding new member inplace of existing
console.log("\nAfter modifying list invitations are as follows: \n");
Bigger_table[2] = "Malaika Iftikhar";
for (var i = 0; i < Bigger_table.length; i++) {
    console.log("Dear " + Bigger_table[i] + ", I have a found a bigger table for dinner, let's meet.");
}
// Adding members in beggining, middle and end
console.log("\nAfter adding new mebers to list, invitations are as follows: \n");
Bigger_table.splice(0, 0, "Rumesa Rafique");
Bigger_table.splice(3, 0, "Mariam Rafique");
Bigger_table.push("Elsa Kalim");
for (var i = 0; i < Bigger_table.length; i++) {
    console.log("Dear " + Bigger_table[i] + ", I have a found a bigger table for dinner, let's meet.");
}
