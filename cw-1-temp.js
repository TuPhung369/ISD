function mathMagic() {
  var test = Number(document.getElementById("txtNumber").value);

  //Your code here
  var sum = 0;
  var test = 68;
  sum = test*2;
  sum += 10;
  sum /=2;
  sum -= test;
  document.getElementById("answerDiv").innerHTML = sum;
}