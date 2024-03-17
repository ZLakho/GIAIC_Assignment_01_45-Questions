// Q: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to 
// send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the
// name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person 
// you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.

let people_invites = ["Zainab lakho","Asma Aslam","Tasbiha Naz","Rameen Iqbal","Sadia Ajmal"];
for(let i = 0 ; i < people_invites.length; i++){
    if(people_invites[i]=="Tasbiha Naz"){
        console.log("Dear " + people_invites[i] + ", I would like to invite you for dinner.")
        console.log("--> " + people_invites[i] + ": Sorry dear i can't make it.")
    }
    else{
    console.log("Dear " + people_invites[i] + ", I would like to invite you for dinner.")}
}
console.log("\nAfter modifying list invitations are as follows: \n")
people_invites[2] = "Malaika Iftikhar";
for(let i = 0 ; i < people_invites.length; i++){
    console.log("Dear " + people_invites[i] + ", I would like to invite you for dinner.")
}