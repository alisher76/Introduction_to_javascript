var hot = false
var temp = prompt("Hello what is the temperature today?: ")

if (temp <= 40) {
   console.log("Damn dude its kind of cold out");
} else if (temp < 60 && temp >= 39) {
   console.log("I ran today its not too hot");
} else if (temp < 80) {
  hot = true
  console.log("WTF It is so hot gotta stay home");
} else {
  hot = true
  console.log("The End Of the world man");
}
