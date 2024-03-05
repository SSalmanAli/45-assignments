var x = ("Monkey D luffy");
console.log(x.toUpperCase());
console.log(x.toLowerCase());
console.log(x.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
