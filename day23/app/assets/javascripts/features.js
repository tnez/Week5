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

  // Create a function that defines a feature node. A feature node
  // has: {top,bottom,left,right,x,y,$element} defining the bounds of
  // the element in the context of the canvas as well as the hidden
  // feature list item that it is associated with.
  var FeatureNode = function(x,y,angle,radius,$element) {
    // define primary properties
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.angle = angle;
    // associate element
    this.$element = $element;    
    // Define boundaries in context of canvas.  Note that origin is
    // bottom left!
    this.top = y - radius;
    this.bottom = y + radius;
    this.left = x - radius;
    this.right = x + radius;
  };

  // Draw a feature node
  function drawFeatureNode(ctx,featureNode) {
    // TODO: set fill and stroke properties
    ctx.strokeStyle = "#FFF";
    ctx.lineWidth = 5;
    ctx.fillStyle = "rgba(255,255,255,0.75)";
    // move to x,y and begin path
    ctx.moveTo(featureNode.x,featureNode.y);
    ctx.beginPath();
    // draw circle
    ctx.arc(featureNode.x,featureNode.y,featureNode.radius,0,Math.PI*2);
    ctx.fill();
    ctx.stroke();
    // DEBUG: put element ID in circle so we can check that the
    // correct element is picked
    ctx.fillStyle = "rgba(0,0,0,0.80)";
    ctx.textAlign = 'center';
    ctx.fillText(featureNode.$element.getAttribute('data-id'),featureNode.x,featureNode.y);
  }

  // Given a feature node, draw the edge from the origin to given
  // feature node
  function drawFeatureEdge(ctx,wOrigin,wRadius,featureNode) {
    // get x,y for edge
    angle = featureNode.angle;    
    x = wOrigin[0] + (wRadius-featureNode.radius) * Math.cos(angle);
    y = wOrigin[1] + (wRadius-featureNode.radius) * Math.sin(angle);
    // TODO: set stroke properties
    ctx.strokeStyle = "rgba(255,255,255,0.25)";
    ctx.lineWidth = 3;
    ctx.beginPath();    
    // move to the center of the canvas
    ctx.moveTo(wOrigin[0],wOrigin[1]);
    // draw edge
    ctx.lineTo(x,y);
    ctx.stroke();
    ctx.fill();
  }

  // create a function to draw a wheel at a given angle
  function drawWheel(canvas, probs, colors, startAngle) {
    // setting up params
    height = canvas.height;
    width = canvas.width;
    originX = canvas.width / 2.0;
    originY = canvas.height / 2.0;
    min_dimension = Math.min(height,width);
    radius = min_dimension * 0.5 * 0.75;
    // initialize current angle
    currentAngle = startAngle;
    // get the canvas on which we are to draw
    ctx = canvas.getContext("2d");
    // clear the canvas
    ctx.clearRect(0,0,height,width);
    // clear our list of feature nodes (they will have new positions)
    featureNodes = [];
    // loop through the data and draw each item    
    for (var idx=0; idx < probs.length; idx++) {
      // get (x,y) given our angle shifting proportionally
      x = originX + radius * Math.cos(currentAngle);
      y = originY + radius * Math.sin(currentAngle);
      // create a new featureNode
      newFeatureNode = new FeatureNode(x,y,currentAngle,30.0,$features[idx]);
      featureNodes.push(newFeatureNode);
      // draw edge and node
      // console.log(newFeatureNode);
      drawFeatureEdge(ctx,[originX,originY],radius,newFeatureNode);
      drawFeatureNode(ctx,newFeatureNode);
      // update the angle
      currentAngle += probs[idx] * Math.PI*2;
    };
  };

  // determine the winning element, in our case the winning element
  // will be the element with the smallest Y value.
  var getWinningElement = function() {
    // assumet that the first element wins (heck, maybe it did)
    bestNode = featureNodes[0];
    // then loop through the rest of the nodes and keep note of the
    // best that we find
    for (i=1; i<featureNodes.length; i++) {
      thisNode = featureNodes[i];
      if (thisNode.y < bestNode.y) {
        bestNode = thisNode;
      }
    }
    return bestNode;
  }

  // setup wheel params
  var $features = $('ul>li')
  var featureNodes = [];
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
        $('.message>h2').html('The wheel hath spoke: ' + getWinningElement().$element.getAttribute('data-description'));
      }
    }, delay );
  }
  
  // draw dat wheel
  ctx = $('canvas')[0].getContext("2d");
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

