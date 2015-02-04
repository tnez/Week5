var x = "Hello World!";
var number = 123;
console.log(x);
console.log(number);
console.log(x + number);
console.log(number + x);

var number2 = 100;

console.log(typeof(number + number2));
console.log(typeof(x));

var number3 = 100.1;
console.log(typeof(number + number3));

var dudeman = ['John', 'Jon', 'Ryan', 'Ryan'];
console.log(dudeman);
console.log(dudeman[1]);

// JSON
// JavaScript Object Notation
var person = {name: "Borat", age: 183, alias: "Willie G"};
console.log(person.name);
console.log(person.age);

// DOM
// Document Object Model
// When the document is loaded, run the code inside of this closure.
$(document).ready(function() {
  console.log("Hey Adam! Fix dat search yo.");
  console.log($('li.jdawg'));
  // $('li.rdawg').hide();

  var grapes = function() {
    console.log("You clicked a Jo(h)n.");
  }

  $('li.jdawg').click(grapes);

  $(".jhide").click(function(){
    console.log("Hide Jo(h)n's!");
    $(".jdawg").hide();
  })

  $(".jshow").click(function(){
    console.log("Show Jo(h)n's!");
    $(".jdawg").show();
  })

  $(".jtoggle").click(function(){
    console.log("Toggle Jo(h)n's!");
    $(".jdawg").toggle();
  })

  $(".rhide").click(function(){
    console.log("Hide Ryan's!");
    $(".rdawg").hide();
  })

  $(".rshow").click(function(){
    console.log("Show Ryan's!");
    $(".rdawg").show();
  })

  $(".hideandseek").click(function(){
    $(".jdawg, .rdawg, img").toggle();
    // $(".rdawg").toggle();
  })

  $(".jdawg:first")
  $(".jdawg:last")
  $("li:visible")
  $("li:hidden")
  $("body li")
  $("ul.name_list li")
  // Only LI's IMMEDIATELY following name_list
  $("ul.name_list > li")
  $("ul.name_list > li > ul > li")
  $("ul.name_list > li > ul > li > ul > li")
  $("ul.name_list > li").children().children().children().children()
  $(".bro").parent()
  $(".bro:first").siblings()
  // Find climbs it's way DOWN the tree
  $("ul.name_list").find(".bro")
  // Closest climbs it's way UP the tree
  $(".chad").closest("div")
  $("ul.name_list .bro").not(".chad")

  $("input:last").attr("type")
  $("input:last").attr("typeasdfasdf")

  $(".fred_flintstone").attr("value")
  $(".fred_flintstone").val()

  // This SET's the attribute
  $(".fred_flintstone").attr("dude_man_is_awesome", true)
  $(".fred_flintstone").attr("dude_man_is_awesome", true).attr("multiple_attributes", true)

  $(".restaurant").click(function() {
    console.log($(this).attr("restaurant_id"));
  })

  $("ul.name_list").append("<li class='stephanie'>Stephanie</li>")
  $(".stephanie").append("<ul><li>Robbi</li><li>Jackie</li><li>Lindsay</li></ul>")
  $(".stephanie > ul > li:last").remove()

})
// console.log($('li.jdawg'));


console.log("Fix dat semicolon, yo!");





















