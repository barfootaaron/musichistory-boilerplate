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
