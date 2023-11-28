
$("#green").click(function(){
    var green = new Audio("sounds/green.mp3");
   green.play();

   $("#green").addClass("pressed");

   setTimeout(function(){
       $("#green").removeClass("pressed");
   },100);
});

$("#red").click(function(){
   var red = new Audio("sounds/red.mp3");
  red.play();
  $("#red").addClass("pressed");

  setTimeout(function(){
      $("#red").removeClass("pressed");
  },100);
});

$("#yellow").click(function(){
   var yellow = new Audio("sounds/yellow.mp3");
  yellow.play();
  $("#yellow").addClass("pressed");

  setTimeout(function(){
      $("#yellow").removeClass("pressed");
  },100);
});

$("#blue").click(function(){
   var blue = new Audio("sounds/blue.mp3");
  blue.play();
  $("#blue").addClass("pressed");

setTimeout(function(){
   $("#blue").removeClass("pressed");
},100);
});