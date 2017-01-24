Music History Part 2

Setup:
Create a branch in your musichistory repository named version2.
Switch to that branch.

Requirements:
Use JavaScript arrays, loops, and innerHTML to show the music you love.

Students must use JavaScript to create a list of songs in the index.html file for their Music History project. Have them download the songs.js file, which contains an array of strings with song information.

1. Each student must add one song to the beginning and the end of the array.
2. Loop over the array and remove any words or characters that obviously don't belong.
3. Students must find and replace the > character in each item with a - character.
4. Must add each string to the DOM in index.html in the main content area.


{Song name} by {Artist} on the album {Album}

Merging your branch:
After you've got all of the requirements completed, follow these steps.

1. In your musichistory directory, enter the command git checkout master. This switches you back to the master branch.
2. git merge -X theirs version2
3. If you see a vim screen with a default message in it just :x to save and exit.

Your branch is now merged into the master branch and you can push the master branch up to Github with git push origin master.





Music History Part 3

Setup:
These commands are a helpful quick start. You may choose to ignore them completely and create your own directory structure. If you choose to use this recommendation, just copy the commands below and paste. It doesn't matter what directory you are currently in.

cd ~/workspace/musichistory
git checkout -b version-3
Instructions

Time to make Music History into a single page application. Before you begin please review the sample code I provided in JavaScript 103 about building a simple SPA.

In the navigation bar, make sure you have two links labeled "List Music", and "Add Music".
Add a DOM element that contains some input fields for the user to enter in the name of a song, the artist for the song, and the album. You do not need to enclose them in a <form> element because we're not actually submitting this form anywhere.
Add a <button> element at the bottom of the input fields labeled "Add".
The input fields and the add button make up the Add Music View.
The existing view - the combination of the filter form and the song list - will be referred to as the List Music View.
The Add Music View should not appear when the user first visits your page. The song list with the corresponding filter form should be visible.
When the user clicks on "Add Music" in the navigation bar, the List Music View should be hidden, and the Add Music View should be shown (see example wireframe).
When the user clicks on "List Music" in the navigation bar, the Add Music View should be hidden, and the List Music View should be shown (see example wireframe).
Once the user fills out the song form and clicks the add button, you should collect all values from the input fields, add the song to your array of songs, and update the song list in the DOM.
Merging

Remember to merge the version-3 branch back into master when you're done.
