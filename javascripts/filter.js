"use strict";

let view = require("./view.js"),
	loader = require("./load.js");

$("#filterButton").click((event) => {
	var songs = loader.getSongs();
	filterSongs(songs);
});

let filterSongs = (songs) => {
	$("#songsDiv").empty();
	let songsArray = [];
	let artist = $("#artist-select").val();
	let album = $("#album-select").val();
	let selected = [];
	$(" input:checked ").each( function() {
		selected.push($(this).val());
	});
	for (var i=0; i<songs.length; i++) {
		if ((songs[i].artist.replace(/\s+/g, '')).toLowerCase() === artist.toLowerCase()) {
			songsArray.push(songs[i]);
		}
		if ((songs[i].album.replace(/\s+/g, '')).toLowerCase() === album.toLowerCase()) {
			songsArray.push(songs[i]);
		}
		for (var x=0; x<selected.length; x++) {
			if((songs[i].genre.replace(/\s+/g, '').toLowerCase()) === selected[x]) {
				songsArray.push(songs[i]);
			}
		}
	}
	let filteredSongs = [];
	$.each(songsArray, function(i, song) {
		if($.inArray(song, filteredSongs) === -1) filteredSongs.push(song);
	});
	
	loader.populateMusic(filteredSongs);

};		

module.exports = filterSongs;