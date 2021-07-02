var ta = document.createElement("textarea");
ta.setAttribute("id", "text");
ta.addEventListener("keyup", charcountupdate);

var span = document.createElement("span");
span.setAttribute("id", "charcount");

ta.append(span);
document.body.append(ta);

function charcountupdate() {
  document.getElementById(
    "charcount"
  ).innerHTML = ` The length of the text area input is ${
    document.getElementById("text").value.length
  }`;
}
