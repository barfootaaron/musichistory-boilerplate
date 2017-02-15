"use strict";


let loader = {};

var songs = [];

// AJAX REQUEST

loader.loadSongs = () => {
	return new Promise ((resolve, reject) => {
		$.ajax({
			url:"songs1.json",
			type:"GET",
			success: (songsData) => {
				for (var i in songsData.songs) {
					songs.push(songsData.songs[i]);
				}
				resolve();
			},
			error: () => {reject("Songs can't load");}
		});
	});
};

// EVENT LISTENERS

$("#moreButton").click((event) => {
	loader.populateMusic(songs);
});

$("#addButton").click((event) => {
	loader.addSong();
	$("#list-view").removeClass("hidden");
	$("#add-view").addClass("hidden");	
});

// LIST MUSIC IN DOM

loader.populateMusic = (songs) => {
	$("#songsDiv").empty();
	var currentSong;
	for (var i=0; i<songs.length; i++) {
		currentSong = songs[i];
		loader.populateDOM(currentSong);
	}
	$(".delete").click(function(event) {
		$(event.currentTarget).parent().remove();
	});
};


// ADD MUSIC TO SONG ARRAY

loader.addSong = (event) => {
	let newSong = {};
	newSong.name = $("#songNameEntered").val();
	newSong.artist = $("#artistNameEntered").val();
	newSong.album = $("#albumNameEntered").val();
	newSong.genre = $("#genreEntered").val();

	songs.push(newSong);
	loader.populateDOM(newSong);
	$(".delete").click((event) => {
		$(event.currentTarget).parent().remove();
	});
};

loader.getSongs = () => {
	return songs;
};


// APPEND DATA TO DOM

loader.populateDOM = (currentSong) => {
	$("#songsDiv").append(
							`<div class="addedSong">
							<ul>
								<h1>${currentSong.name}</h1>
								
									<li>${currentSong.artist}</li>
									<li>	|	</li>
									<li>${currentSong.album}</li>
									<li>	|	</li>
									<li>${currentSong.genre}</li>
									<button class="delete" id=${currentSong.name}>Delete</button>
									<hr>
								</ul>
							</div>`
						);
					};

module.exports = loader;					



