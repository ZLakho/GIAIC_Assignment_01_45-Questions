// Q: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// • Make a list of five or more usernames called current_users.
let current_users = ["Zaila","ZLakho","AAslam","Sidnaz","Naiza112"];

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users = ["zaila","Hussain112","Gul87","AAslam","zain776"]

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

for (let i = 0; i < new_users.length; i++) {
    let usernameTaken = false;
    for (let j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
            console.log("The username '" + new_users[i] + "' is not available. ");
            usernameTaken = true;
            break; // No need to continue checking once a match is found
        }
    }
    if (!usernameTaken) {
        console.log("The username '" + new_users[i] + "' is available.");
    }
}