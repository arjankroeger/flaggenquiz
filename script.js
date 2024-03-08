function changeBrightness(input, image) {
    if(input.value.length >=1)
    {
        image.classList.add("darken");
    }
    else
    {
       image.classList.remove("darken") 
    }
}

let lines
let quizcontent

const img11l = document.getElementById("vf11l")
const in11l = document.getElementById("vi11l")

in11l.addEventListener("input" , function() {
    setOthers(in11l);
    changeBrightness(in11l, img11l);
    checkAllAnswers();
});

const img11r = document.getElementById("vf11r")
const in11r = document.getElementById("vi11r")

in11r.addEventListener("input" , function() {
    setOthers(in11r);
    checkAllAnswers();
});

const img12 = document.getElementById("vf12")
const in12 = document.getElementById("vi12")

in12.addEventListener("input" , function() {
    setOthers(in12);
    checkAllAnswers();
});

const img13l = document.getElementById("vf13l")
const in13l = document.getElementById("vi13l")

in13l.addEventListener("input" , function() {
    setOthers(in13l);
    checkAllAnswers();
});
const img13r = document.getElementById("vf13r")
const in13r = document.getElementById("vi13r")

in13r.addEventListener("input" , function() {
    setOthers(in13r);
    checkAllAnswers();
});

const img21 = document.getElementById("vf21")
const in21 = document.getElementById("vi21")

in21.addEventListener("input" , function() {
    setOthers(in21);
    checkAllAnswers();
});

const img22 = document.getElementById("vf22")
const in22 = document.getElementById("vi22")

in22.addEventListener("input" , function() {
    setOthers(in22);
    checkAllAnswers();
});

const img23 = document.getElementById("vf23")
const in23 = document.getElementById("vi23")

in23.addEventListener("input" , function() {
    setOthers(in23);
    checkAllAnswers();
});



const img31l = document.getElementById("vf31l")
const in31l = document.getElementById("vi31l")

in31l.addEventListener("input" , function() {
    setOthers(in31l);
    checkAllAnswers();
});

const img31r = document.getElementById("vf31r")
const in31r = document.getElementById("vi31r")

in31r.addEventListener("input" , function() {
    setOthers(in31r);
    checkAllAnswers();
});

const img32 = document.getElementById("vf32")
const in32 = document.getElementById("vi32")

in32.addEventListener("input" , function() {
    setOthers(in32);
    checkAllAnswers();
});

const img33l = document.getElementById("vf33l")
const in33l = document.getElementById("vi33l")

in33l.addEventListener("input" , function() {
    setOthers(in33l);
    checkAllAnswers();
});
const img33r = document.getElementById("vf33r")
const in33r = document.getElementById("vi33r")

in33r.addEventListener("input" , function() {
    setOthers(in33r);
    checkAllAnswers();
});


var positonlist = ["o1","om1","om2","om3","o2","o3",in11l,in11r,in12,in13l,in13r,in21,in22,in23,in31l,in31r,in32,in33l,in33r];
var imagelist = [img11l,img11r,img12,img13l,img13r,img21,img22,img23,img31l,img31r,img32,img33l,img33r];


function lenge1(input){
    return(input.value.length >= 1)
}

function setOthers(newestIn){
    var index = positonlist.indexOf(newestIn);
    var newestFlag = quizcontent[index];
    for(let i = 6 ; i < positonlist.length; i++){
        if(newestFlag === quizcontent[i]){
            positonlist[i].value = newestIn.value
            changeBrightness(positonlist[i],imagelist[i-6])
        }
    }
    
}

function checkAllAnswers(){
    
    if( lenge1(in11l) && lenge1(in11r) && lenge1(in12)&& lenge1(in13l) && lenge1(in13r)
        &&lenge1(in21) && lenge1(in22)&& lenge1(in12)
        && lenge1(in31l) && lenge1(in31r) && lenge1(in32)&& lenge1(in33l) && lenge1(in33r))
    
    {
        var quizsolved = true 
        for(let i = 6; i<positonlist.length; i++){
            if(positonlist[i].value !== quizcontent.charAt(i+13)){
                quizsolved = false
            } 
        }
    
        if(quizsolved == true){
            confetti()
        }
        else{
            var  solutionWrongElement = document.getElementById("solutionwrong");
            
            solutionWrongElement.classList.add("solutionwrongshow")
            setTimeout(function() {
                solutionWrongElement.classList.remove("solutionwrongshow")
            }, 1000); // 500 milliseconds = 0.5 seconds


        }
    } 
}



function startGame(){
    var quizid= Math.round(Math.random() * (180743 - 1) + 1)
    fetch("statics/equations.txt")
    .then(response => response.text())
    .then(text => {
        lines = text.split("\n");
        quizcontent = lines[quizid];
        console.log(quizcontent)
        //set operators
        document.getElementById("o1").innerHTML = quizcontent.charAt(0);
        document.getElementById("om1").innerHTML = quizcontent.charAt(1);
        document.getElementById("om2").innerHTML = quizcontent.charAt(2);
        document.getElementById("om3").innerHTML = quizcontent.charAt(3);
        document.getElementById("o2").innerHTML = quizcontent.charAt(4);
        document.getElementById("o3").innerHTML = quizcontent.charAt(5);

        // set flags
        for(let i=0; i<imagelist.length; i++){
        imagelist[i].src = "statics/"+quizcontent.charAt(i+6)+".png";
        }
        //rest inputvalus
        for(let i = 6; i< positonlist.length; i++){
            positonlist[i].value = ""
            changeBrightness(positonlist[i],imagelist[i-6])
        }
    })
}

function toggledarklightmode(){
    var root = document.documentElement;
    if(document.getElementById("darklightmodeToggle").checked){
        
        // Changing CSS variables
        root.style.setProperty('--background-color-quiz', '#1B065E'); // Change to black
        root.style.setProperty('--text-color-quiz', '#8A709340'); // Change to white
        root.style.setProperty('--text-color-rest', '#F9DAC8'); // Change to white
        root.style.setProperty('--background-color-rest', '#B194B3'); // Change to dark gray
        root.style.setProperty('--background-color-button', '#F5ECCD'); // Change to red
    
    }
    else{
        
        
        // Changing CSS variables
        root.style.setProperty('--background-color-quiz', '#F9DAC8'); // Change to black
        root.style.setProperty('--text-color-quiz', '#6d587440'); // Change to white
        root.style.setProperty('--text-color-rest', '#1B065E'); // Change to white
        root.style.setProperty('--background-color-rest', '#B194B3'); // Change to dark gray
        root.style.setProperty('--background-color-button', '#F5ECCD'); // Change to red
    }
}

document.getElementById("darklightmodeToggle").addEventListener("change", toggledarklightmode)

toggledarklightmode()




const canvas = document.getElementById("confetti");

const jsConfetti = new JSConfetti();

function confetti(){
    canvas.style.visibility = "visible";
    jsConfetti.addConfetti({
        emojis: ["🚩","🏳️‍⚧️","🏳️‍🌈","🏳️","🏴","🏁","🏴‍☠️"],
    }).then(() => jsConfetti.addConfetti())
}
