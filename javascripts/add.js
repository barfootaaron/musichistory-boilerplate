//Initialize variables for views
var addLink = document.getElementById("link-add");
var addView = document.getElementById("add-view");

//Event listener to show addview and hide homeview
addLink.addEventListener("click", function() {
	homeView.classList.add("hidden");

 	addView.classList.add("visible");
 	addView.classList.remove("hidden");
});

//Initialize var for add button
var addSongButton = document.getElementById("add-button");

//Event listener to add newSongString to songs array when add button is pushed//
addSongButton.addEventListener("click", function(event) {
	var newSongName = document.getElementById("songNameEntered").value;
	var newSongArtist = document.getElementById("artistNameEntered").value;
	var newSongAlbum = document.getElementById("albumNameEntered").value;
	var newSongString = newSongName + ' by ' + newSongArtist + ' on the album ' + newSongAlbum + '<br>';
	console.log("Button works!");
	
//Assemble html element and place newSongString inside, then add to songs array//
	var li = document.createElement("li");
	var br = document.createElement("br");
	counter += 1;
	var keyName = 'song' + counter;
	li.innerHTML = newSongString;
	li.id = keyName;
	element.appendChild(li);
	songs.unshift(newSongString);

//Hide addview and show homeview and add newSongString to songs array//
	addView.classList.add("hidden");

 	homeView.classList.add("visible");
 	homeView.classList.remove("hidden");

 	songs.unshift(newSongString);
});






