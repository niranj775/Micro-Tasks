var div = document.createElement("div");
div.setAttribute("class", "hover-effect");
div.innerHTML = "This is a P tag";

div.addEventListener("mouseover", mouseOn);
div.addEventListener("mouseout", mouseOff);

document.body.append(div);

function mouseOn() {
  document.getElementById("hover-effect").style.color = "red";
}

function mouseOff() {
  document.getElementById("hover-effect").style.color = "black";
}
