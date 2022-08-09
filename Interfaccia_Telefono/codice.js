var a = 0
var b = 0
var c = 0
var d = 0
function cinque(){
  document.getElementById("fish5").style.display = "block";
  a = a + 1;
  document.getElementById("casella5").innerHTML = a;

}
function dieci(){
  document.getElementById("fish10").style.display = "block";
  b = b + 1;
  document.getElementById("casella10").innerHTML = b;
}
function venticinque(){
  document.getElementById("fish25").style.display = "block";
  c = c + 1;
  document.getElementById("casella25").innerHTML = c;
}
function cinquanta(){
  document.getElementById("fish50").style.display = "block";
  d = d + 1;
  document.getElementById("casella50").innerHTML = d;
}






function conferma() {
    document.getElementById("inizio").style.display = "none";
    var z = document.getElementById("casella").value;
    document.getElementById("nome").style.display = "block";
    document.getElementById("nome").innerHTML="Giocatore: xxx".replace(/xxx/,z);
    document.getElementById("invisibilo").style.display = "block";
    document.getElementById("fine").style.display = "block";
}


document.onmousemove = function(e){
var x = e.pageX;
var y = e.pageY;
e.target.title = "X is "+x+" and Y is "+y;
};


function Invisibile() {
  var x = document.getElementById("fine");
  var y = document.getElementById("partita");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}
