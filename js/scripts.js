console.log("Hello, World!")

var x = document.title;
console.log(x);

// setting vs. returning: 
//                        RETURN ( var x = $("h1").text();)
//                        SET ( $("div").text("hi");)
// "." for class, "#" for id in the selector element

//                      Types of data:
// Number = 3;
// String = "Hello";
// Boolean = true;
// Array = [1, 2, 3];
// Object = {pet: "Cat", name: "Pip"}

$("#num-19").prepend("<h2>World Toilet Day</h2>");
$("#num-19").addClass("wtd")

$("#num-20").prepend("<h2>World Children's Day</h2>");
$("#num-20").addClass("wcd")

$("#num-21").prepend("<h2>World Television Day</h2>");
$("#num-21").addClass("wtvd")

$("#num-25").prepend("<h2>International Day for the Elimination of Violence against Women</h2>");
$("#num-25").addClass("iwd")

$("#num-26").prepend("<h2>World Sustainable Transport Day</h2>");
$("#num-26").prepend("<img src=\"imgs/bus.png\">")
$("#num-26").addClass("wstd")
$("#num-26").css("background", "blue")