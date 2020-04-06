var ul = document.getElementsByTagName("td"); // Selecting the td elements
//console.log(ul.length) , o/p = 9

var showResult = document.getElementById("demo");
var xwin = document.getElementById("xwin");
var owin = document.getElementById("owin");

function insert() {
  // this function will insert the value to the game

  var num = 0; //This varibales help inserting X and O values alternatively

  for (let i = 0; i < ul.length; i++) {
    ul[i].addEventListener("click", function () {
      if (ul[i].innerHTML == "") {
        if (num % 2 == 0) {
          // if num is EVEN it will return X value
          ul[i].innerHTML = "X";
          showResult.innerHTML = " Now O Chance"; // This will the next chance for the player

          selectWinner();
          //console.log(selectWinner());

          if (selectWinner() == "X") {
            xwin.innerHTML = "x win";
            xwin.style.left = 0;
          }

          num++;
        } // if num is ODD it will return O value
        else {
          ul[i].innerHTML = "O";
          showResult.innerHTML = " Now X Chance"; // This will the next chance for the player

          selectWinner();
          //console.log(selectWinner());

          if (selectWinner() == "O") {
            owin.innerHTML = "O win";
            owin.style.right = 0;
          }

          num++;
        }
      } else {
        showResult.innerHTML = "Already inserted";
      } 
    });
  }
}

insert();

function selectWinner() {
  // This function will pick winner

  // Selecting 9 boxes

  var b1 = document.getElementById("one").innerHTML;
  var b2 = document.getElementById("two").innerHTML;
  var b3 = document.getElementById("three").innerHTML;
  var b4 = document.getElementById("four").innerHTML;
  var b5 = document.getElementById("five").innerHTML;
  var b6 = document.getElementById("six").innerHTML;
  var b7 = document.getElementById("seven").innerHTML;
  var b8 = document.getElementById("eight").innerHTML;
  var b9 = document.getElementById("nine").innerHTML;
  var overlay = document.getElementById("overlay");
  var resetbtn = document.getElementById("reset");

  // This function returns the Pop up Reset button after winning

  function reset() {
    setTimeout(function () {
      overlay.style.filter = "blur(5px)";
      resetbtn.style.display = "block";
    }, 1000);
  }

  // checks the possibility of winning in rows , columns and in diagonally

  if (b1 != "" && b1 == b2 && b2 == b3) {
    reset();

    return b1;
  }
  if (b4 != "" && b4 == b5 && b5 == b6) {
    reset();

    return b4;
  }
  if (b7 != "" && b7 == b8 && b8 == b9) {
    reset();

    return b7;
  }
  if (b1 != "" && b1 == b4 && b4 == b7) {
    reset();

    return b1;
  }
  if (b2 != "" && b2 == b5 && b5 == b8) {
    reset();

    return b2;
  }
  if (b3 != "" && b3 == b6 && b6 == b9) {
    reset();

    return b3;
  }
  if (b1 != "" && b1 == b5 && b5 == b9) {
    // checks the same elements Diagonally

    reset();

    return b1;
  }
  if (b3 != "" && b3 == b5 && b5 == b7) {
    // checks the same elements Diagonally

    reset();

    return b3;
  }
  if(b1 != "" && b2 != "" && b3 !="" && b4 != "" && b5 !="" && b6 !="" && b7 != "" && b8 != "" && b9 != ""){
    reset()
    showResult.innerHTML = "Match Tied"
  }
  
}

// Resets the Game

function reset() {
  window.location.reload(true);
}
