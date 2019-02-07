var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function () {
  //loop through elements
  // for()
  for (key in this.playlists) {
    let idd = this.playlists[key].id;
    let listname = this.playlists[key].name;
    let numbertr = this.playlists[key].tracks.length;
    console.log(idd + ': ' + listname + ' - ' + numbertr + ' tracks');
  }
},
  printTracks: function () {
  for (key in this.tracks) {
    let numbertr = this.tracks[key].id
    let name = this.tracks[key].name
    let artist = this.tracks[key].artist
    let album = this.tracks[key].album
    console.log(numbertr + ': ' + name + ' by ' + artist + ' ' + '(' + album + ')')
  }
},
  printPlaylist: function (playlistId) {
  let playn = this.playlists[playlistId].name
  var ntrack = this.playlists[playlistId].tracks.length;
console.log(playlistId + ': ' + playn + ' - ' + ntrack + ' tracks')
  //for(key in library.playlist[playlistId].tracks) {


  for (let i = 0; i < this.playlists[playlistId].tracks.length; i++) {
    let hold = this.playlists[playlistId].tracks[i]
    console.log(this.playlists[playlistId].tracks[i] + ' ' + this.tracks[hold].name + ' by ' + '(' + library.tracks[hold].album + ') ')
}
},
  addTrackToPlaylist: function (trackId, playlistId) {
this.playlists[playlistId].tracks.push(trackId);

},
  uid: function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

},
  addTrack: function (name, artist, album) {
  let ui = uid()
  this.tracks[ui] = {
    id: ui,
    name: name,
    artist: artist,
    album: album}
},
  addPlaylist: function (name) {
  let ui = uid()
  this.playlists[ui] = {
    id: ui,
    name: name,
    tracks: []}

},

}
console.log(library)