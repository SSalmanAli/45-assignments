var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function (x) {
    var a = "th";
    if (x == 1) {
        a = "st";
    }
    else if (x == 2) {
        a = "nd";
    }
    else if (x == 3) {
        a = "rd";
    }
    console.log("".concat(x).concat(a));
});
