window.onload = function () {
  debugger
  var textinputs = document.querySelectorAll(".popover li input[type=checkbox]")
  console.log(textinputs)
  var checkbox = (Array.from(textinputs)).filter((element)=> element.checked === true);
  console.log(checkbox)
}
