

var buttonlength = document.querySelectorAll('.drum').length;

for(var i =0; i<buttonlength;i++){

    document.querySelectorAll('button')[i].addEventListener("click", clickme);
}

function clickme(){
    // alert("button is clicked");
    // var audio = new Audio('sounds/tom-1.mp3');
    // audio.play();

    // console.log(this.innerHTML);

    var buttonhtml = this.innerHTML;

    keystroke(buttonhtml);
    activeanimation(buttonhtml);
   
    setTimeout(function(){

        var animate =  document.querySelector('.'+buttonhtml);
        animate.classList.remove("pressed");
       
    }, 100);

    // console.log(this.style.color = "red");
}


//keypress event listeners
document.addEventListener('keypress',function(event){
    // alert("The key was pressed");

    console.log(event.key);

    var Keypressed = event.key;
    keystroke(Keypressed);
    activeanimation(Keypressed);

    setTimeout(function(){

        var animate =  document.querySelector('.'+Keypressed);
        animate.classList.remove("pressed");
       
    }, 100);

   


})

function keystroke(key){


    switch(key){
        case "a" :
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;

        case "s":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;

                case "d":
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;

                case "f":
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;

                case "j":
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;

                case "k":
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;

                case "l":
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;

                default:
                    console.log('Get the correct sound');
        }

}

function activeanimation(animatekey){

    console.log(animatekey);
   var animate =  document.querySelector('.'+animatekey);
   animate.classList.add("pressed");

}




// -------or---------

// Another way by calling anonymous function

// document.querySelector('button').addEventListener('click', function(){

//     alert("button is clicked");
// })

// console.log(document.querySelectorAll('.drum').length);



