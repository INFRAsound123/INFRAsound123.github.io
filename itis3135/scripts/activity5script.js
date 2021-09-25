var user = prompt("Please Enter Your Name")
var feeling = prompt("How are you doing")

var d = new Date();
var dt = d.getDate();
var a = (d.getMonth()+1);
var y = d.getFullYear();
var h = (d.getHours()-12);
var m = d.getMinutes();
var s = d.getSeconds();

document.write("Today is " + a + "/" + dt + "/" + y + ", and the current time is " + h + ":" + m + ":" + s);
document.write("<br>"+"<br>"+"The Macho Yankee Salamander Welcomes you, " + user);
document.write("<br>"+"<br>"+"We are glad you are doing "+ feeling);

function button1() {
  var btn1 = document.createElement("button");
  document.body.appendChild(btn1);
}

function button2() {
  var btn2 = document.createElement("button");
  document.body.appendChild(btn2);
}

function button3() {
  var btn3 = document.createElement("button");
  document.body.appendChild(btn3);
}

function button4() {
  var btn4 = document.createElement("button");
  document.body.appendChild(btn4);
}

function button5() {
  var btn5 = document.createElement("button");
  document.body.appendChild(btn5);
}