// Shrinking Guest List

let x = [ "Tommy shelby" , "Mark Zukerberg" , "Mukesh Ambani" , "Bill Gates"]
let y = "Mr."
let z = "Sir i would like to invite you to dinner!"

// console.log("Good news!! i have found a bigger table")

// x.unshift("Satoshi Nakamoto"); // places the name in front of the array
// x.splice(x.length / 2 , 0 ,  "Aman Gupta")  //places the name in middle of the array 
// x.push("Gotham Adani") // places the name at the end of array

// x.forEach(result => console.log(y ,result, z))

console.log("Oh no I can only invite 2 people at dinner");

while (x.length > 2) {
    let removeGuest = x.pop();
    console.log(`Sorry, ${removeGuest} you're no longer invited for dinner.`)
}
x.forEach((x) => {
    console.log(`Dear ${x}, you're still invited to the dinner.`)
})
x.splice(0,2);
console.log(x);








