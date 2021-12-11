function loadDoc1() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("help").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "autoconvert.txt", true);
  xhttp.send();
}

//Code optained from the webite https://www.w3schools.com/xml/ajax_xmlhttprequest_send.asp//
