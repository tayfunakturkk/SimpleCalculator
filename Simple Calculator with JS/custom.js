let buttons = document.getElementsByTagName("button");
let screen = document.getElementsByClassName("screen1")[0];
let calculate = document.getElementById("calculate");
let clear = document.getElementById("clear");
for (var i = 0; i < buttons.length; i++) {
  if (i == 12 || i == 14) {
    
  }
  else{
    buttons[i].addEventListener("click", print);
  }
}
function print() {
  screen.value = screen.value + this.value;
}

calculate.addEventListener("click", result);

function result() {
  if(screen.value == ""){
    screen.value = screen.value;
  }
  else{
  screen.value = eval(screen.value);
}}

clear.addEventListener("click", clean);

function clean() {
  screen.value = "";
}
