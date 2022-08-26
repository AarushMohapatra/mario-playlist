function firstplay() {
  window.alert("Overworld");
  document.getElementById("audio").src = "1.mp3";
  document.getElementById("audio").play();
  document.getElementById("play").textContent = "Super Mario Bros. NES - Overworld"
}
function pause() {
  window.alert("Its stopped now"); 
  document.getElementById("audio").pause();
  document.getElementById("play").textContent = "Nothing is playing right now"
}
function secondplay() {
  window.alert("Underground");
  document.getElementById("audio").src = "2.mp3";
  document.getElementById("audio").play();
  document.getElementById("play").textContent = "Super Mario Bros. NES - Underground"
}
function thirdplay() {
  window.alert("Overworld");
  document.getElementById("audio").src = "3.mp3";
  document.getElementById("audio").play();
  document.getElementById("play").textContent = "Super Mario Bros.2 NES - Overworld"
}
function fourthplay() {
  window.alert("Donut Plains");
  document.getElementById("audio").src = "4.mp3";
  document.getElementById("audio").play();
  document.getElementById("play").textContent = "Super Mario World SNES - Overworld"
}
function test() {
  window.alert("testing audio...");
  document.getElementById("audio").src = "https://mahdihat791.github.io/v2/test.mp3";
  document.getElementById("audio").play();
  document.getElementById("play").textContent = "Audio being tested..."
}
