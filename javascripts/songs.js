//Old array with characters to remove AND New clean array//
var songs = [];
var newSongs = [];

//Link ul element #songs to newSongs array//
var element = document.getElementById("songs");

var counter = 0;

//Downloaded song list
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

//Add 1 song to beginning and 1 to end of array
songs.unshift("Sugar Magnolia > by Grateful Dead on the album American Beauty");
songs.push("What's Going On > by Marvin Gaye on the album The Best of Marvin Gaye")

console.log("songs with respective artist and album names")

//Create function to clean up original songs array//
function findLetters() {
		//Iterate through each string in songs array//
		for (var i=0; i<songs.length; i++) {

			//Create <li> for each loop
			var li = document.createElement("li");
		
			//Create ID names
			counter += 1;
			var keyName = 'song' + counter;

			//remove or replace unwanted characters
			var x = songs[i].replace(/>/g, "-");
			var y = x.replace(/\*|!|@|\(|/g, "");

			
			newSongs += y;

			//
			li.innerHTML = y;
			li.id = keyName;

			//Insert elements into index.html
			element.appendChild(li);
		}
}

findLetters();