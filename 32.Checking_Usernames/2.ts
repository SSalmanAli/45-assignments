let current_users = ["Moiz" , "Hammad" , "Hassan" , "Anum" , "Mahanoor"];
let new_users = ["Faiz" , "Anum" , "Moiz" , "Abdullah" , "Warda"];

new_users.forEach( new_users =>{
    if (current_users.some(currentUser => currentUser.toUpperCase() == new_users.toUpperCase())) {
        console.log(`${new_users} will need to enter a new username`);
    } else {
        console.log(`${new_users} is available`)
    }
});








