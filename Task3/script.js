var head1 = document.createElement("h1");

head1.innerHTML = "This is a heading Tag";

head1.addEventListener("click", displayXY);

var para = document.createElement("p");

var span = document.createElement("span");

span.setAttribute("id", "coord");

para.append(span);
head1.append(para);
document.body.append(head1);

function displayXY(e) {
  document.getElementById(
    "coord"
  ).innerHTML = `X: ${e.clientX} Y: ${e.clientY}`;
}
