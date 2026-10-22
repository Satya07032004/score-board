let home = 0;
let guest = 0;
let homeScore = document.getElementById("homeScore");
homeScore.textContent = home;
let guestScore = document.getElementById("guestScore");
guestScore.textContent = guest;

function add1Home() {
  home += 1;
  homeScore.textContent = home;
}
function add2Home() {
  home += 2;
  homeScore.textContent = home;
}
function add3Home() {
  home += 3;
  homeScore.textContent = home;
}

function add1Guest() {
  guest += 1;
  guestScore.textContent = guest;
}
function add2Guest() {
  guest += 2;
  guestScore.textContent = guest;
}
function add3Guest() {
  guest += 3;
  guestScore.textContent = guest;
}

function reset() {
  guest = 0;
  home = 0;
  guestScore.textContent = guest;
  homeScore.textContent = home;
}
