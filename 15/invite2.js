var people_invites = ["Zainab lakho", "Asma Aslam", "Tasbiha Naz", "Rameen Iqbal", "Sadia Ajmal"];
for (var i = 0; i < people_invites.length; i++) {
    if (people_invites[i] == "Tasbiha Naz") {
        console.log("Dear " + people_invites[i] + ", I would like to invite you for dinner.");
        console.log("--> " + people_invites[i] + ": Sorry dear i can't make it.");
    }
    else {
        console.log("Dear " + people_invites[i] + ", I would like to invite you for dinner.");
    }
}
console.log("\nAfter modifying list invitations are as follows: \n");
people_invites[2] = "Malaika Iftikhar";
for (var i = 0; i < people_invites.length; i++) {
    console.log("Dear " + people_invites[i] + ", I would like to invite you for dinner.");
}
