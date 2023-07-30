function temperature() {
  //To convert celcius to farenheit
  //(CEL * 9/5) + 32
  var c = document.getElementById("celsius").value;
  var f = (c * 9) / 5 + 32;
  document.getElementById("fahrenheit").value = f;
}

function weight() {
  //To convert KGs to Pounds
  // KG * 2.2
  var kg = document.getElementById("kilo").value;
  var p = kg * 2.2;
  document.getElementById("pounds").value = p;
}

function distance() {
  //To convert KMs to Miles
  // KM * 0.62137
  var km = document.getElementById("km").value;
  var m = km * 0.62137;
  document.getElementById("miles").value = m;
}
