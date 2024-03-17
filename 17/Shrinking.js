var Shrinking_guest = ["Zainab lakho", "Asma Aslam", "Tasbiha Naz", "Rameen Iqbal", "Sadia Ajmal"];
for (var i = 0; i < Shrinking_guest.length; i++) {
    if (Shrinking_guest[i] == "Tasbiha Naz") {
        console.log("Dear " + Shrinking_guest[i] + ", I have a found a bigger table for dinner, let's meet.");
        console.log("--> " + Shrinking_guest[i] + ": Sorry dear i can't make it.");
    }
    else {
        console.log("Dear " + Shrinking_guest[i] + ", I would like to invite you for dinner.");
    }
}
// adding new member inplace of existing
console.log("\nAfter modifying list invitations are as follows: \n");
Shrinking_guest[2] = "Malaika Iftikhar";
for (var i = 0; i < Shrinking_guest.length; i++) {
    console.log("Dear " + Shrinking_guest[i] + ", I have a found a bigger table for dinner, let's meet.");
}
// Adding members in beggining, middle and end
console.log("\nAfter adding new mebers to list, invitations are as follows: \n");
Shrinking_guest.splice(0, 0, "Rumesa Rafique");
Shrinking_guest.splice(3, 0, "Mariam Rafique");
Shrinking_guest.push("Elsa Kalim");
for (var i = 0; i < Shrinking_guest.length; i++) {
    console.log("Dear " + Shrinking_guest[i] + ", I have a found a bigger table for dinner, let's meet.");
}
// Removing members
console.log("\n\nSorry due to some problems, I can invite only two people for dinner.\n");
for (var i = 0; i < Shrinking_guest.length; i++) {
    while (Shrinking_guest.length != 2) {
        console.log(Shrinking_guest[(Shrinking_guest.length) - 1] + ", Sorry dear I can't invite you for dinner");
        Shrinking_guest.pop();
    }
    console.log(Shrinking_guest[i] + ", you're still invited");
}
// Emptying list
console.log("\nAfter deleting mebers from list: \n");
for (var i = 0; i < Shrinking_guest.length; i++) {
    Shrinking_guest.pop();
}
for (var i = 0; i < Shrinking_guest.length; i++) {
    console.log("No items in the list");
}
