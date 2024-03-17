// Q: Intentional Error: If you haven’t received an array index error in one of your programs yet, try to
//  make one happen. Change an index in one of your programs to produce an index error. Make sure you 
//  correct the error before closing the program.

let people_invite1 = ["Zainab lakho","Asma Aslam","Tasbiha Naz","Rameen Iqbal","Sadia Ajmal"];
for(let i = 0 ; i <= people_invite1.length; i++){
    console.log("Dear " + people_invite1[i] + ", I would like to invite you for dinner.")
}
//Correcting error
console.log("\n After correcting error:\n")
for(let i = 0 ; i < people_invite1.length; i++){
    console.log("Dear " + people_invite1[i] + ", I would like to invite you for dinner.")
}