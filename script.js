function convert() {
  let decimal= console.log(document.getElementById('decimal').value);
  console.log(decimal);
  let bin= parseInt (decimal). toString(2);
  document.getElementById('bin').innerHTML= bin;
  let oct= parseInt (decimal).toString(8);
  document.getElementById('oct').innerHTML = oct;
  let hex = parseInt(decimal).toString(16);
  document.getElementById('hex').innerHTML= hex;
}
