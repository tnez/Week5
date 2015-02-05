$(document).ready( function() {

  console.log("Code loaded");
  console.log("Hello Fred");

  $( ".validate-test" ).blur(function() {
    console.log("Do some cool stuff here.");
    console.log(  $(this).val()  );
    if($(".validate-test").val() != "") {
      console.log("Remove disabled");
      $(".submit-things").removeClass('disabled');
    }    
  });
});