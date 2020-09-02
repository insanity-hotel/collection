$(document).ready(function() {

alert("welcome to my portfolio of existential dread.");


   $("#linktoindex").draggable();



  $("#stranger").hover(function(){
    	$("#linktoindex").show();
   });


  $("#pretense").click(function(){
       $(this).hide();
   });

   $("#sociology").click(function(){
        $(this).hide();
    });

    $("#lyft").click(function(){
         $(this).hide();
     });

})
