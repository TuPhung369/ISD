function OneVariable() {
  let one = Number(document.getElementById("txtNumber").value);
  //Your code here
  one = one*one + one;
  document.getElementById("answerDiv").innerHTML = one;
}
