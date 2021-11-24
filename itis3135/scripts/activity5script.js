var user = prompt("Please Enter Your Name")
var feeling = prompt("How are you doing")

var d = new Date();
var dt = d.getDate();
var a = (d.getMonth()+1);
var y = d.getFullYear();
var h = (d.getHours()-12);
var m = d.getMinutes();
var s = d.getSeconds();

var x = ("Today is " + a + "/" + dt + "/" + y + ", and the current time is " + h + ":" + m + ":" + s);
var b =("<br>"+"<br>"+"The Macho Yankee Salamander Welcomes you, " + user);
var l =("<br>"+"<br>"+"We are glad you are doing "+ feeling);

document.write("<font color=\"yellow\">" + x + "</font>");
document.write("<font color=\"yellow\">" + b + "</font>");
document.write("<font color=\"yellow\">" + l + "</font>");

function button1() {
  var btn1 = document.createElement("button");
  window.open("https://www.indeed.com/jobs?q=Internship&mna=5&aceid&gclid=CjwKCAiAv_KMBhAzEiwAs-rX1KhK9FgY-ROxaJgo5UAO9mmIudi1he_-9kzkS0bR8XennP8yXtUkohoCQncQAvD_BwE&vjk=9344c13d838569f8")
}

function button2() {
  var btn2 = document.createElement("button");
  document.getElementById('pic').style.display='block';
}

function button3() {
  var btn3 = document.createElement("button");
  document.getElementById("text").innerHTML = "Some ways to deal with heat is to use our fire-resistant paint as it contains properties that allows for the maximum heat absorbtion up to 100 degrees Farenheit and you can use our special drink which contains special minerals which allow your body to essenttially reflect heat and only keep the heat that you need"
}

function button4() {
  var btn4 = document.createElement("button");
  var hours=prompt("Enter number of hours you would work in a day")
  var days=prompt("Enter number of days in a week you would work")
  var final= ((16.50*hours)*days)*4
  alert("You would be making rougly $"+final+" in a month")
}

function button5() {
  var btn5 = document.createElement("button");
  var x=prompt("Enter your email to recieve more information on our company")
  alert("Email Received")
}