function make_album(Artist_Name: string, Album_title: string, tracks?: number) {
    let album = { Artist_Name, Album_title };
    if (tracks > 0) {
        album['tracks'] = tracks;
    }
    return album;
}

console.log(make_album("Atif Aslam", "Jal Pari"));
console.log(make_album("Dhruv", "butterfly"));
console.log(make_album("kanye west", "fein", 12));





