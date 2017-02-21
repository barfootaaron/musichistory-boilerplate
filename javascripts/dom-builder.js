"use strict";
// This module only cares about the data it receives. It doesn't have to know about where the data comes from.

function makeSongList(songList) {
  let $songsDisplay =
  $(`<div class="song__song-list box col-xs-12">
    <ul class="song-list">
    </ul>
    
  </div>`);
  $(".uiContainer--wrapper").html($songsDisplay);
  for (let song in songList ) {
    let currentSong = songList[song],
        songListItem = $("<li>", {class: "song-list__item"}),
        name = $("<h1/>", {class: "song-name"}).text(currentSong.name),
        songListData = $("<ul/>", {class: "song-list__item--data"}),
        songListEdit = $("<button/>", {"data-edit-id": song, class: "edit-btn btn btn-success", text: "edit" }),
        songListDelete = $("<button/>", {"data-delete-id": song, class: "delete-btn btn btn-success", text: "delete" }),
        // Same as `<a id="${song}" class="delete-btn waves-effect waves-light btn">delete</a>`
        songBR = $("<br>"),
        songHR = $("<hr>", {class: "song-hr"});
        

    songListData.append(
      `
        <li>${currentSong.artist}</li>
        <li>  |  </li>
        <li>${currentSong.album}</li>
        <li>  |  </li>
        <li>${currentSong.year}</li>
        <li>  |  </li>
        <li>${currentSong.genre}</li>
      `);

    $(".song-list").append(songListItem.append(name));
    $(".song-list").append(songListItem.append(songListData).append(songListDelete).append(songListEdit).append(songBR).append(songHR));
  }
}



function songForm(song, songId) {
  return new Promise(function (resolve, reject) {
    let songItem = {
      name: song ? song.name : "",
      artist: song ? song.artist : "",
      year: song ? song.year : "",
      genre: song ? song.genre : "",
      album: song ? song.album : "",
      formName: song ? `Edit "${song.name}"` : "Add a new song",
      btnText: song ? "Save Changes" : "Save Song",
      btnId: song ? "save_edit_btn" : "save_new_btn"  // identify which action to take
    },
    form =
      `<h3>${songItem.formName}</h3>
      <label class="addFormLabel">Song Title:</label><br>
      <input type="text" class="form-field" id="form--name" placeholder="name" value="${songItem.name}"></input><br>

      <label class="addFormLabel">Artist:</label><br>
      <input type="text" class="form-field" id="form--artist" placeholder="artist" value="${songItem.artist}"></input><br>

      <label class="addFormLabel">Album:</label><br>
      <input type="text" class="form-field" id="form--album" placeholder="album" value="${songItem.album}"></input><br>

      <label class="addFormLabel">Year Released:</label><br>
      <input type="text" class="form-field" id="form--year" placeholder="year" value="${songItem.year}"></input><br>

      <label class="addFormLabel">Genre:</label><br>
      <input type="text" class="form-field" id="form--genre" placeholder="genre" value="${songItem.genre}"></input><br>

      <button id="${songId}" class=${songItem.btnId}>${songItem.btnText}</button>`;
    resolve(form);
  });
}

module.exports = {
  makeSongList,
  songForm
};