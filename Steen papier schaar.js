var player = 0;
var cpu = 0;

function RPS(val) {
   var comp = Math.floor(Math.random()* 5 + 1);

   switch (val){
       case "Rock":
           switch (comp) {
               case 1:
                   document.getElementById("result").innerHTML = "Jou keuze is The Rock ik kies The Rock je heb gelijk gespeeld";
                   break;
               case 2:
                   document.getElementById("result").innerHTML = "Jou keuze is The Rock ik kies Paper je heb verloren";
                   cpu +=1;
                   document.getElementById("score2").innerHTML = "punt voor cpu " + cpu;
                   break;

               case 3:
                  document.getElementById("result").innerHTML = "Jou keuze is The Rock ik kies Scissors  je heb gewonnen";
                   player +=1;
                   document.getElementById("score").innerHTML = "punt voor jou " + player;
                   break;
               case 4:
                   document.getElementById("result").innerHTML = "Jou keuze is The Rock ik kies Lizard je heb gewonnen";
                   player +=1;
                   document.getElementById("score").innerHTML = "punt voor jou " + player;
                   break;
               case 5:
                   document.getElementById("result").innerHTML = "Jou keuze is The Rock ik kies Scissors je heb verloren";
                   cpu +=1;
                   document.getElementById("score2").innerHTML = "punt voor cpu " + cpu;
                   break;
           }
           break;

       case "Paper":
           switch (comp) {
               case 1:
                   document.getElementById("result").innerHTML = "Jou keuze is Paper ik kies The Rock je heb gewonnen";
                   player +=1;
                   document.getElementById("score").innerHTML = "punt voor jou " + player;
                   break;
               case 2:
                   document.getElementById("result").innerHTML = "Jou keuze is Paper ik kies  Paper je heb gelijk gespeeld";
                   break;
               case 3:
                   document.getElementById("result").innerHTML = "Jou keuze is Paper ik kies Scissors je heb verloren";
                   cpu +=1;
                   document.getElementById("score2").innerHTML = "punt voor cpu " + cpu;
                   break;
               case 4:
                   document.getElementById("result").innerHTML = "Jou keuze is Paper ik kies Lizard je heb verloren";
                   cpu +=1;
                   document.getElementById("score2").innerHTML = "punt voor cpu " + cpu;
                   break;
               case 5:
                   document.getElementById("result").innerHTML = "Jou keuze is Paper ik kies Spock je heb gewonnen";
                   player +=1;
                   document.getElementById("score").innerHTML = "punt voor jou " + player;
                   break;

           }
           break;
       case "Scissors":
           switch (comp) {
               case 1:
                   document.getElementById("result").innerHTML = "Jou keuze is Scissors ik kies The Rock je heb verloren";
                   cpu +=1;
                   document.getElementById("score2").innerHTML = "punt voor cpu " + cpu;
                   break;
               case 2:
                   document.getElementById("result").innerHTML = "Jou keuze is Scissors ik kies  Paper je heb gewonnen";
                   player +=1;
                   document.getElementById("score").innerHTML = "punt voor jou " + player;
                   break;
               case 3:
                   document.getElementById("result").innerHTML = "Jou keuze is Scissors ik kies Scissors je heb gelijk gespeeld";
                   break;
               case 4:
                   document.getElementById("result").innerHTML = "Jou keuze is Scissors ik kies Lizard je heb gewonnen";
                   player +=1;
                   document.getElementById("score").innerHTML = "punt voor jou " + player;
                   break;
               case 5:
                   document.getElementById("result").innerHTML = "Jou keuze is Scissors ik kies Spock je heb verloren";
                   cpu +=1;
                   document.getElementById("score2").innerHTML = "punt voor cpu " + cpu;
                   break;
           }
           break;
       case "Lizard":
           switch (comp) {
               case 1:
                   document.getElementById("result").innerHTML = "Jou keuze is Lizard ik kies The Rock je heb verloren";
                   cpu +=1;
                   document.getElementById("score2").innerHTML = "punt voor cpu " + cpu;
                   break;
               case 2:
                   document.getElementById("result").innerHTML = "Jou keuze is Lizard ik kies  Paper je heb gewonnen";
                   player +=1;
                   document.getElementById("score").innerHTML = "punt voor jou " + player;
                   break;
               case 3:
                   document.getElementById("result").innerHTML = "Jou keuze is Lizard ik kies Scissors je heb verloren";
                   cpu +=1;
                   document.getElementById("score2").innerHTML = "punt voor cpu " + cpu;
                   break;
               case 4:
                   document.getElementById("result").innerHTML = "Jou keuze is Lizard ik kies Lizard je heb gelijk gespeeld";
                   break;
               case 5:
                   document.getElementById("result").innerHTML = "Jou keuze is Lizard ik kies Spock je heb gewonnen";
                   player +=1;
                   document.getElementById("score").innerHTML = "punt voor jou " + player;
                   break;
           }
           break;
       case "Spock":
           switch (comp) {
               case 1:
                   document.getElementById("result").innerHTML = "Jou keuze is Spock ik kies The Rock je heb gewonnen";
                   player +=1;
                   document.getElementById("score").innerHTML = "punt voor jou " + player;
                   break;
               case 2:
                   document.getElementById("result").innerHTML = "Jou keuze is Spock ik kies  Paper je heb verloren";
                   cpu +=1;
                   document.getElementById("score2").innerHTML = "punt voor cpu " + cpu;
                   break;
               case 3:
                   document.getElementById("result").innerHTML = "Jou keuze is Spock ik kies Scissors je heb gewonnen";
                   player +=1;
                   document.getElementById("score").innerHTML = "punt voor jou " + player;
                   break;
               case 4:
                   document.getElementById("result").innerHTML = "Jou keuze is Spock ik kies Lizard je heb verloren";
                   cpu +=1;
                   document.getElementById("score2").innerHTML = "punt voor cpu " + cpu;
                   break;
               case 5:
                   document.getElementById("result").innerHTML = "Jou keuze is Spock ik kies Spock je heb gelijk gespeeld";
                   break;
           }
           break;

   }

}
