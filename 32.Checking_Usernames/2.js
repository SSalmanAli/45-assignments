var current_users = ["Moiz", "Hammad", "Hassan", "Anum", "Mahanoor"];
var new_users = ["Faiz", "Anum", "Moiz", "Abdullah", "Warda"];
new_users.forEach(function (new_users) {
    if (current_users.some(function (currentUser) { return currentUser.toUpperCase() == new_users.toUpperCase(); })) {
        console.log("".concat(new_users, " will need to enter a new username"));
    }
    else {
        console.log("".concat(new_users, " is available"));
    }
});
// let current_users: string[] = ["user1", "admin", "user3", "user4", "user5"];
// let new_users: string[] = ["User1", "User6", "user7", "admin", "User9"];
// new_users.forEach(newUser => {
//     if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
//         console.log(`${newUser} will need to enter a new username.`);
//     } else {
//         console.log(`${newUser} is available.`);
//     }
// });
