document.getElementById('stopButton').onclick = illuminateRed;

function illuminateRed() {
  clearLights();
  document.getElementById('stopLight').style.backgroundColor = "red";
}

function clearLights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
}