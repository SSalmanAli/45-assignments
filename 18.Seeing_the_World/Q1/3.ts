let x = ["India", "New Zealand", "Africa", "Pakistan", "Bangladesh"];

console.log("Original Order", x);
console.log("-----------------------------------------------------------------")
console.log("Alphabetical Order", [...x].sort());
console.log("-----------------------------------------------------------------")
console.log("Reverse Alphabetical Order", [...x].sort().reverse());
console.log("-----------------------------------------------------------------")
console.log("Reversed Order", x.reverse());
console.log("-----------------------------------------------------------------")
console.log("Back to its Original Order", x.reverse())
console.log("-----------------------------------------------------------------")
console.log("Sorted in Alphabetical Order", x.sort())
console.log("-----------------------------------------------------------------")
console.log("Sorted in Reverse Alphabetical Order", x.sort().reverse())