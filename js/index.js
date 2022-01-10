// Iteration 1: Names and Input

// Iteration 2: Conditionals


// Iteration 3: Loops
//console.log("I'm ready!")

let hacker1 = "John"
 console.log(`"The driver's name is ${hacker1}"`)
 let hacker2 = "Luc"
 console.log(`"The navigator's name is ${hacker2}"`)

if(hacker1.length>hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else if(hacker2.length>hacker1.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}else{
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
//3.1
let hacker3= "";
for(i = 0; i < hacker1.length; i++){
   hacker3+= (hacker1[i].toUpperCase()+" ")
}
console.log(hacker3)

//3.2
let reversedName = '';
for(i = hacker2.length - 1; i >= 0; i--){
  hacker2[i];
  reversedName += hacker2[i];
}
console.log(reversedName)

//3.3
hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();

if(hacker1 > hacker2){
 console.log("The driver's name goes first.")
}else if(hacker1 < hacker2){
  console.log("Yo, the navigator goes first definitely.")
}else {
  console.log("What?! You both have the same name?")
}
