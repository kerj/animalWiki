$(document).ready(function()  {
  $("form").submit(function(event) {
    var animal = parseInt($("#animalSelect").val());
    if (animal === 1) {
      $("#turtle").removeClass("hidden");
      $("#snake").addClass("hidden");
      $("#gator").addClass("hidden");
    }else if (animal === 2) {
      $("#snake").removeClass("hidden");
      $("#turtle").addClass("hidden");
      $("#gator").addClass("hidden");
    }else {
      $("#gator").removeClass("hidden");
      $("#snake").addClass("hidden");
      $("#turtle").addClass("hidden");
    }
    event.preventDefault();
  });
})
