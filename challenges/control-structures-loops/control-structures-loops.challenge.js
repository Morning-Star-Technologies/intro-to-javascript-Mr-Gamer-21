/**
* Using a common theme (pick whatever you like) demonstrate the use of a while loop and include the following:
* - An if (or if/else) statement inside the while loop
* - At least one comparison operator somewhere in your code
*/

// Begin writing your code below

// simplified using a while loop

let items = ["Poe Lantern", "Compass", "Map"] 

let i = 0;
while (i < items.length) {
  if (items[i].includes('a')) {
    console.log(items[i]);
  }
  i++;
}