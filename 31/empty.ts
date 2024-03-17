// Q:No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
let usernames1 = ["admin","Zaila","Hussain012","Zain778","ZainabL112"];
if(usernames1.length!=0){
    console.log("List is not empty!")
}
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

// emptying list 
while(usernames1.length != 0){
    usernames1.pop();
    usernames1.length - 1;
}

if(usernames1.length==0){
    console.log("We need to find some users!")
}

