"use strict";
// function  make_album(Artist_Name: string ,Album_title :string , tracks: number) {
//     let album = { Artist_Name , Album_title};
//     if (tracks) {
//         album['tracks'] = tracks;
//     }
//     return album;
// }
// console.log(make_album("Atif Aslam" , "Jal Pari"));
function make_album(artist, title, tracks) {
    let album = { artist, title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));
