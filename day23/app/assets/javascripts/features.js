$(document).ready(function() {
  var currentListItem = $("li:first").addClass("selected");
  var delay = 10;
  var maxDelay = (Math.random() * 150)+150;
  console.log("Hey hey heyyyy");
  // $(".spin-the-wheel").click(function() {
  //   delay = 10;
  //   maxDelay = (Math.random() * 150)+150;
  //   function spinTheWheel() {
  //     setTimeout(function() {
  //       $("<audio></audio>").attr({
  //         'src': '/assets/tick.mp3',
  //         'autoplay': 'autoplay'
  //       }).appendTo("body");
  //       delay += 5;
  //       currentListItem.next().addClass("selected");
  //       currentListItem.removeClass("selected");    
  //       // console.log(currentListItem)
  //       if( currentListItem[0] == $("li:last")[0]  ){
  //         currentListItem = $("li:first");
  //         currentListItem.addClass("selected");
  //       }else {
  //         currentListItem = currentListItem.next();
  //       }
  //       console.log(delay);
  //       if(delay <= maxDelay) {
  //         spinTheWheel();
  //       } else {
  //         endProgram();
  //       }
  //     }, delay);
  //   };
  //   function endProgram() {
  //     console.log("end");
  //     var description = $(".selected input").val();
  //     $(".task").html(description);
  //   }
  //   spinTheWheel();
  // });


  // Forces a click event to execute.
  // $(".spin-the-wheel").click();


  // create a function to draw a wheel at a given angle
  function drawWheel(canvas, probs, colors, startAngle) {
    // setting up params
    height = canvas.height;
    width = canvas.width;
    originX = canvas.width / 2.0;
    originY = canvas.height / 2.0;
    min_dimension = Math.min(height,width);
    radius = min_dimension * 0.5 * 0.75;
    // current angle (initialize to zero)
    currentAngle = startAngle;
    // get the canvas on which we are to draw
    ctx = canvas.getContext("2d");
    // clear the canvas
    ctx.clearRect(0,0,height,width);
    // loop through the data and draw each item    
    for (var idx=0; idx < probs.length; idx++) {
      // get (x,y) given our angle shifting proportionally
      x = originX + radius * Math.cos(currentAngle);
      y = originY + radius * Math.sin(currentAngle);
      // setup styles
      ctx.fillStyle = "rgba(255,255,255,1.0)";
      ctx.strokeStyle = "rgba(255,255,255,0.25)";
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(originX,originY);
      ctx.lineTo(x,y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x,y);
      ctx.beginPath();
      ctx.arc(x,y,min_dimension / 20.0,0,Math.PI*2,true);
      ctx.strokeStyle = "rgba(0,0,0,0.75)";
      ctx.stroke();
      ctx.fill();
      ctx.font = '10pt Calibri';
      ctx.fillStyle = "rgba(0,0,0,0.80)";
      ctx.textAlign = 'center';
      ctx.fillText(idx,x,y);
      currentAngle += probs[idx] * Math.PI*2;
    };
  };

  // setup wheel params
  var $features = $('ul>li')
  var canvas = $('canvas')[0];
  var probs = $features.map( function() { return 1.0 / $features.length });
  // var colors = ['red','yellow','blue','green','yellow','blue'];
  // rotate 1 degree every delay, starting at 90 degrees (top of wheel)
  var delay = 1;
  var max_delay = 100;
  var stepSize = Math.random() * (Math.PI*2)/100.0;
  var currentAngle = Math.PI * 0.5;

  // repeatedly call for the wheel to be drawn after a given delay
  // which is increased (exponentially) at each iteration
  spinWheel = function spinWheel() {
    setTimeout( function() {
      // draw the wheel
      drawWheel(canvas,probs,0,currentAngle);
      // update the current angle
      currentAngle += stepSize;
      // console.log(delay);
      if ( delay < max_delay ) {
        // increase the delay using an exponential (1.8), attenuated
        // by some constant (750.0)
        delay += Math.pow(delay, 1.80) / 750.0;
        spinWheel();
      } else {
        $('.message>h2').html('The wheel hath spoke: the winner is ' +
                              findTheWinner(currentAngle,probs) + '!')
      }
    }, delay );
  }

  // return the squared error between two numbers
  function squaredErr(a,b) {
    return Math.pow(b-a,2);
  }
  
  // given our original set of probabilities and our current angle,
  // return the winning list element
  function findTheWinner(currentAngle,probs) {
    // our target angle is the top of our wheel at 270 degrees
    // (Math.PI*1.5)
    targetAngle = Math.PI*1.5;
    // normalize our current angle (it has gone around a bunch of
    // times and we need to know in terms of the range 0 - 360)
    currentAngle = currentAngle % (Math.PI*2);
    // assume the winner is the first element, this is probably not
    // the case, but it doesn't hurt to assume as long as we properly
    // check everything else
    minIdx = 0;
    minError = squaredErr(targetAngle,currentAngle);
    console.log(currentAngle,targetAngle,minError);    
    // loop through our probability vector, and find the element with
    // the minimum distance between itself and the target vector
    for(i=1; i<probs.length; i++) {
      // bump up the current angle according to the probability at
      // point
      currentAngle += Math.PI*2 * probs[i];
      currentErr = squaredErr(targetAngle,currentAngle);
      if ( currentErr < minError ) {
        minIdx = i;
        minError = currentErr;
      }
    }
    return minIdx;
  }

  // draw dat wheel
  drawWheel(canvas, probs, 0, -Math.PI*0.5);

  // start that wheel-a-spinnin'
  $(".spin-the-wheel").click( function () {
    delay = 1;
    stepSize = Math.random() * (Math.PI*2)/100.0;
    currentAngle = Math.PI * 0.5;
    $('.message>h2').html('Watch it go!!!')
    spinWheel();
  });
});

