// 2. Convert km - miles

function convertKmToMiles(km, miles) {
  return km * miles;
}

let km = prompt("Enter the distance in kilometers:"); // Add prompt to get user input
const miles = 0.621371;
let result = convertKmToMiles(km, miles);

console.log("km is " + result);
