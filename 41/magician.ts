// Q: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array.

function show_magicians(magician){
    for(let i = 0; i<magician.length ; i++){
        console.log(`The super dooper magician ${magician[i]}`)
    }
}

let magician = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller", "Criss Angel", "Dynamo"];
show_magicians(magician);