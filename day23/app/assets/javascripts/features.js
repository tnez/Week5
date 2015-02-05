$(document).ready(function() {
  var currentListItem = $("li:first").addClass("selected");
  var delay = 10;
  var maxDelay = (Math.random() * 150)+150;
  console.log("Hey hey heyyyy");
  $(".spin-the-wheel").click(function() {
    delay = 10;
    maxDelay = (Math.random() * 150)+150;
    function spinTheWheel() {
      setTimeout(function() {
        $("<audio></audio>").attr({
          'src': '/assets/tick.mp3',
          'autoplay': 'autoplay'
        }).appendTo("body");
        delay += 5;
        currentListItem.next().addClass("selected");
        currentListItem.removeClass("selected");    
        // console.log(currentListItem)
        if( currentListItem[0] == $("li:last")[0]  ){
          currentListItem = $("li:first");
          currentListItem.addClass("selected");
        }else {
          currentListItem = currentListItem.next();
        }
        console.log(delay);
        if(delay <= maxDelay) {
          spinTheWheel();
        } else {
          endProgram();
        }
      }, delay);
    };
    function endProgram() {
      console.log("end");
      var description = $(".selected input").val();
      $(".task").html(description);
    }
    spinTheWheel();
  });


  // Forces a click event to execute.
  // $(".spin-the-wheel").click();
})