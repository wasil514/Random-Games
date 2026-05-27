var comp_score=0;
var player_score=0;

document.getElementById("startbtn").addEventListener("click", function(){
    let name=document.getElementById("name").value
document.getElementById("hellotag").innerHTML=`<h3> Hello ${name}. Are you ready for the game of Snake, Water and Gun, We're excited to have you </h3>`


    
    let score_diff;
    let choices=["Snake","Water","Gun"]
    let random_choice=Math.floor(Math.random()*3)
    let comp_choice=choices[random_choice]

    let player_choice=document.getElementById("Choice").value
    if((comp_choice=="Snake"&&player_choice=="Water")||(comp_choice=="Water"&&player_choice=="Gun")||(comp_choice=="Gun"&&player_choice=="Snake")){
        document.getElementById("result").innerHTML=`<b>The computer's choice was ${comp_choice} meanwhile your choice was ${player_choice}, so by the rules the computer has won this round</b>`
        comp_score++;
    }

    else if((player_choice=="Snake"&&comp_choice=="Snake")||(comp_choice=="Water"&&player_choice=="Water")||(player_choice=="Gun"&&comp_choice=="Gun")){
        document.getElementById("result").innerHTML=`<b>Both the player and the computer has chosen ${comp_choice} which results in draw and none gettings the points for the round</b>`

    }
    else if((player_choice=="Snake"&&comp_choice=="Water")||(player_choice=="Water"&&comp_choice=="Gun")||(player_choice=="Gun"&&comp_choice=="Snake")){
        document.getElementById("result").innerHTML=`<b>The computer's choice was ${comp_choice} meanwhile your choice was ${player_choice}, so by the rules the player has won this round</b>`
        player_score++;
    }

if(comp_score>player_score){
    document.getElementById("finalresult").innerHTML=`The computer has won the game by the score difference of ${score_diff=comp_score-player_score}points</b> <br> <div><u>"Better luck next time</u> </div>`
    
}
else if(comp_score<player_score){
    document.getElementById("finalresult").innerHTML=`<b>The player has won the game by the score difference of ${score_diff=player_score-comp_score}</b> <br> <div> <i>Congratulations</i> </div>`

}
else if(comp_score==player_score){
    document.getElementById("finalresult").innerHTML=`<b>The game has ended with a draw with both the sides having ${comp_score} points</b> <br> <div><u>"Better luck next time</u> </div>`
}
})
