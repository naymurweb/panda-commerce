// number2
var h2 = document.getElementsByTagName("h2");
for (var i = 0; i < h2.length; i++) {
  var heading2 = h2[i];
  heading2.style.color = "red";
}

// number3
var backpack = document.getElementById("backpack");
backpack.style.backgroundColor = "green";

// number4
var cards = document.getElementsByClassName("card");
for (var card of cards) {
  card.style.borderRadius = "30px";
}

// number5
function clgBtn() {
  console.log("this is 1st card for click");
}

//number6
var allBtn = document.getElementsByClassName("btn");
for (var btn of allBtn) {
  btn.addEventListener("click", function (event) {
    event.target.remove(event.target);
  });
}

//number7
document.getElementById("input").addEventListener("keyup", function (event) {
  var btn = document.getElementById("lastBtn");
  if (event.target.value == "email") {
    btn.removeAttribute("disabled");
  } else {
    btn.setAttribute("disabled", true);
  }
});

//number8
document
  .getElementById("bigImg")
  .addEventListener("mouseenter", function (event) {
    event.target.src = "../images/shoes/shoe-3.png";
  });

// number9
document.getElementById('touch').addEventListener('dblclick',function(event){
  event.target.style.backgroundColor='green'
  
})
