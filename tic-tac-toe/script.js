
      var ul = document.getElementsByTagName("td");

      function selectWinner(){

               var b1 = document.getElementById("one").innerHTML;
               var b2 = document.getElementById("two").innerHTML;
               var b3 = document.getElementById("three").innerHTML;
               var b4 = document.getElementById("four").innerHTML;
               var b5 = document.getElementById("five").innerHTML;
               var b6 = document.getElementById("six").innerHTML;
               var b7 = document.getElementById("seven").innerHTML;
               var b8 = document.getElementById("eight").innerHTML;
               var b9 = document.getElementById("nine").innerHTML;
               var showResult = document.getElementById("demo");
               var overlay = document.getElementById("overlay");
               var resetbtn = document.getElementById("reset");

               if(b1 != "" && b1 == b2 && b2 == b3){

                    showResult.innerHTML = b1 + "  win";

                    setTimeout(function(){
                        overlay.style.filter = "blur(5px)";
                        resetbtn.style.display = "block";
                    },1000);

               }
               if(b4 != "" && b4 == b5 && b5 == b6){
                    showResult.innerHTML = b4 + "  win";

                    setTimeout(function(){
                        overlay.style.filter = "blur(5px)";
                        resetbtn.style.display = "block";
                    },1000);

               }
               if(b7 != "" && b7 == b8 && b8 == b9){
                    showResult.innerHTML = b7 + "  win";

                    setTimeout(function(){
                        overlay.style.filter = "blur(5px)";
                        resetbtn.style.display = "block";
                    },1000);

               }
               if(b1 != "" && b1 == b4 && b4 == b7){
                    showResult.innerHTML = b1 + "  win";

                    setTimeout(function(){
                        overlay.style.filter = "blur(5px)";
                        resetbtn.style.display = "block";
                    },1000);

               }
               if(b2 != "" && b2 == b5 && b5 == b8){
                    showResult.innerHTML = b2 + "  win";

                    setTimeout(function(){
                        overlay.style.filter = "blur(5px)";
                        resetbtn.style.display = "block";
                    },1000);

               }
               if(b3 != "" && b3 == b6 && b6 == b9){
                     showResult.innerHTML = b3 + "  win";

                     setTimeout(function(){
                        overlay.style.filter = "blur(5px)";
                        resetbtn.style.display = "block";
                    },1000);

               }
               if(b1 != "" && b1 == b5 && b5 == b9){ // checks the same elements Diagonally
                     showResult.innerHTML = b1 + "  win";

                     setTimeout(function(){
                        overlay.style.filter = "blur(5px)";
                        resetbtn.style.display = "block";
                    },1000);

               }
               if(b3 != "" && b3 == b5 && b5 == b7){ // checks the same elements Diagonally
                     showResult.innerHTML = b3 + "  win";

                     setTimeout(function(){
                        overlay.style.filter = "blur(5px)";
                        resetbtn.style.display = "block";
                    },1000);

               }



      }



     function insert(){
       var num = 0;

           for(let i=0;i<ul.length;i++){
               
                   ul[i].addEventListener("click",function(){

                           if(ul[i].innerHTML == ""){

                                   if(num % 2 == 0){
                                       ul[i].innerHTML = "X";
                                       document.getElementById("demo").innerHTML = " Now O Chance";
                                       selectWinner();
                                       num++;
                                   }
                                   else
                                   {
                                       ul[i].innerHTML = "O";
                                       document.getElementById("demo").innerHTML =  " Now X Chance";
                                       selectWinner();
                                       num++;
                                   }
                           }
                           else
                           {
                               document.getElementById("demo").innerHTML =  "already Data is Avaliable";
                           }
               });
               
           }
     }
     insert();


     function reset(){

         window.location.reload(true);

     }




