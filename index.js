
// GRAPHIC 1 
var $ball = document.getElementById("drop-ball");

//move down
function moveDown(){
    /*var x = document.getElementById('drop-ball');
    var top = parseInt(x.style.top);
    x.style.top = top +12+"px";
    console.log(x.style.top);*/
    document.getElementById("drop-ball").animate([
        //keyframes
        {transform: 'translateY(0px)'},
        {transform: 'translateY(-300px)'}
    ], {
        //timing
        duration:1000
    });
}

//button on click drops ball
//('drop-button').on('click',function dropBall(){
//     $ball.animate({top:'-30'});
//});