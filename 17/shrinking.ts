// Q: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the
//  dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can 
// invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you 
// pop a name from your list, print a message to that person letting them know you’re sorry you can’t 
//  them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you
//  actually have an empty list at the end of your program.

let Shrinking_guest = ["Zainab lakho","Asma Aslam","Tasbiha Naz","Rameen Iqbal","Sadia Ajmal"];
for(let i = 0 ; i < Shrinking_guest.length; i++){
    if(Shrinking_guest[i]=="Tasbiha Naz"){
        console.log("Dear " + Shrinking_guest[i] + ", I have a found a bigger table for dinner, let's meet.")
        console.log("--> " + Shrinking_guest[i] + ": Sorry dear i can't make it.")
    }
    else{
    console.log("Dear " + Shrinking_guest[i] + ", I would like to invite you for dinner.")}
}

// adding new member inplace of existing

console.log("\nAfter modifying list invitations are as follows: \n")
Shrinking_guest[2] = "Malaika Iftikhar";
for(let i = 0 ; i < Shrinking_guest.length; i++){
    console.log("Dear " + Shrinking_guest[i] + ", I have a found a bigger table for dinner, let's meet.")
}

// Adding members in beggining, middle and end
console.log("\nAfter adding new mebers to list, invitations are as follows: \n")
Shrinking_guest.splice(0,0,"Rumesa Rafique");
Shrinking_guest.splice(3,0,"Mariam Rafique");
Shrinking_guest.push("Elsa Kalim")
for(let i = 0 ; i < Shrinking_guest.length; i++){
    console.log("Dear " + Shrinking_guest[i] + ", I have a found a bigger table for dinner, let's meet.")
}

// Removing members

console.log("\n\nSorry due to some problems, I can invite only two people for dinner.\n")
for(let i=0;i<Shrinking_guest.length;i++){
    while(Shrinking_guest.length!=2){
        console.log(Shrinking_guest[(Shrinking_guest.length)-1]+", Sorry dear I can't invite you for dinner");
        Shrinking_guest.pop();
        
    }
    console.log(Shrinking_guest[i]+", you're still invited")
}
// Emptying list
console.log("\nAfter deleting mebers from list: \n")
for(let i=0;i<Shrinking_guest.length;i++){
    Shrinking_guest.pop()
    
}
for(let i=0;i<Shrinking_guest.length;i++){
    console.log("No items in the list")
}
