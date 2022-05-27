window.onload = function () {
  let amenities = {}
//  debugger
  $('input[type="checkbox"]').change(function() {
    if (this.checked) {
      amenities[$(this).data('id')] = ($(this).data('name'));
    } else {
      delete amenities[($(this).data('id'))];
    }
    //$('#h4_amenities').text(Object.values(amenities))
    $('#h4_amenities').text(Object.keys(amenities).map(function(k){return amenities[k]}).join(", "));
  });
}
//  var textinputs = document.querySelectorAll(".popover li input[type=checkbox]")
//  console.log(textinputs)
//  var checkbox = (Array.from(textinputs)).filter((element)=> element.checked === true);
//  console.log(checkbox)
