var ta = document.createElement("textarea");
ta.setAttribute("id", "text");
ta.addEventListener("keyup", charcountupdate);

var span = document.createElement("span");
span.setAttribute("id", "charcount");

document.body.append(ta);
document.body.append(span);

function charcountupdate() {
  document.getElementById(
    "charcount"
  ).innerHTML = ` The length of the text area input is ${
    document.getElementById("text").value.length
  }`;
}
