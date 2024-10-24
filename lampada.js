const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const lamp = document.getElementById("lamp");

function isLampBroken() {
  return lamp.src.indexOf("quebrada") > -1;
}
function lampOn() {
  if (!isLampBroken()) {
    lamp.src = "./img/ligada.jpg";
    var body = document.body; //para deixar mais """"""realista""""""
    body.style.background = "white";
  }
}
function lampOff() {
  if (!isLampBroken()) {
    lamp.src = "./img/desligada.jpg";
  }
}
function lampBroken() {
  lamp.src = "./img/quebrada.jpg";
  var body = document.body; //para deixar mais """"""realista"""""" fica tudo escuro quando quebra a lampada
  body.style.background = "black";
}
turnOn.addEventListener("click", lampOn);
turnOff.addEventListener("click", lampOff);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);
lamp.addEventListener("dblclick", lampBroken);
