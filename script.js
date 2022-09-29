//Buttons
let playBtn=document.querySelector(".btn.play");
let pauseBtn=document.querySelector(".btn.pause");
let resetBtn=document.querySelector(".btn.reset");


//1st container
let hrInput=document.querySelector(".select.hr");
let minInput=document.querySelector(".select.min");
let secInput=document.querySelector(".select.sec");
let container1=document.querySelector(".container")


function increase(element,unit){
    if(element.innerText=="00"){
        unit=="23"?element.innerText="23":element.innerText="59"
    }
    else{
        let finalDisplay=Number(element.innerText)-1;
        if(finalDisplay<10){
            element.innerText="0"+finalDisplay;
        }
        else    
            element.innerText=finalDisplay;
    }
}
function decrease(element,unit){
    if(element.innerText==unit){
        element.innerText="00";
    }
    else{
        let finalDisplay=Number(element.innerText)+1;
        if(finalDisplay<10){
            element.innerText="0"+finalDisplay;
        }
        else    
            element.innerText=finalDisplay;
    }
}

//Hour
let upHr=document.querySelector(".select.hr .up")
let dwnHr=document.querySelector(".select.hr .down");
let hrdisplay=document.querySelector(".hr-display");

upHr.addEventListener("click",()=>{
    increase(hrdisplay,"23");
})

dwnHr.addEventListener("click",()=>{
    decrease(hrdisplay,"23");
})

//Min
let upMin=document.querySelector(".select.min .up");
let dwnMin=document.querySelector(".select.min .down");
let mindisplay=document.querySelector(".min-display");

upMin.addEventListener("click",()=>{
    increase(mindisplay,"59");
})
dwnMin.addEventListener("click",()=>{
    decrease(mindisplay,"59");
})

//Sec
let upSec=document.querySelector(".select.sec .up");
let dwnSec=document.querySelector(".select.sec .down");
let secdisplay=document.querySelector(".sec-display");

upSec.addEventListener("click",()=>{
    increase(secdisplay,"59");
    if(hrdisplay.innerText=="00" && mindisplay.innerText=="00" && secdisplay.innerText=="00")
        document.querySelector(".btn.play i").style.color="#7979ad";
    else{
        document.querySelector(".btn.play i").style.color="#2424c0";
    }
})
dwnSec.addEventListener("click",()=>{
    decrease(secdisplay,"59");
    if(hrdisplay.innerText=="00" && mindisplay.innerText=="00" && secdisplay.innerText=="00")
        document.querySelector(".btn.play i").style.color="#7979ad";
    else{
        document.querySelector(".btn.play i").style.color="#2424c0";
    }
})

//2nd container

let hrSDisplay=document.querySelector(".time-hr");
let minSDisplay=document.querySelector(".time-min");
let secSDisplay=document.querySelector(".time-sec");
let container2= document.querySelector(".second-container");

let hours;
let minutes;
let seconds;


//Confetti
const start=()=>{
    setTimeout(function(){
        confetti.start();
    })
}
const stop=()=>{
    setTimeout(function(){
        confetti.stop();
    })
}

let timer=false;

function play(){
    timer=true;
    timerCountdown(1);
}

function pause(){
    timer=false;
}

function reset(){
    timer=false;
    hrSDisplay.innerHTML="00";
    minSDisplay.innerHTML="00";
    secSDisplay.innerHTML="00";
    stop();
    document.querySelector(".finished").classList.add("hidden");
}


function timerCountdown(dont){
    if(timer===true){
        if(seconds=="00"){
            if(minutes=="00"){
                if(hours=="00")
                    console.log("No hours");
                else{
                    minutes="60";
                    hours=hours-1;
                    let h=hours;
                    if(hours<10)
                        h="0"+h;
                    hrSDisplay.innerHTML=h;
                }
            }
            if(minutes=="00" && hours=="00"){
                pauseBtn.classList.add("hidden");
                document.querySelector(".finished").classList.remove("hidden");
                start();
                return;
            }
            else{
                seconds="60";
                minutes=minutes-1;
                let m=minutes;
                if(minutes<10){
                    m="0"+m;
                }
                minSDisplay.innerHTML=m;
            }
        }
        console.log(seconds);
        if(dont==0)
            seconds=seconds-1;
        let s=Number(seconds);
        if(seconds<10){
            s="0"+s;
        }
        secSDisplay.innerHTML=s;
        setTimeout("timerCountdown(0)",1000)
    }
}
addEventListener("load",()=>{
    if(hrdisplay.innerText=="00" && mindisplay.innerText=="00" && secdisplay.innerText=="00")
        document.querySelector(".btn.play i").style.color="#7979ad";
})



playBtn.addEventListener("click",()=>{
    if(hrdisplay.innerText=="00" && mindisplay.innerText=="00" && secdisplay.innerText=="00")
        console.log("Can't start timer");
    else{
        if(container1.classList.contains("hidden")){
            hours=hrSDisplay.innerText;
            minutes=minSDisplay.innerText;
            seconds=secSDisplay.innerText;
        }else{
            hrSDisplay.innerText=hrdisplay.innerText;
            hours=hrSDisplay.innerText;
            minSDisplay.innerText=mindisplay.innerText;
            minutes=minSDisplay.innerText;
            secSDisplay.innerText=secdisplay.innerText;
            seconds=secSDisplay.innerText;
            container1.classList.add("hidden");
            container2.classList.remove("hidden");
        }
        playBtn.classList.add("hidden");
        pauseBtn.classList.remove("hidden");
        resetBtn.classList.remove("hidden");
        play();
    }
})

pauseBtn.addEventListener("click",()=>{
    pauseBtn.classList.add("hidden");
    playBtn.classList.remove("hidden");
    resetBtn.classList.remove("hidden");
    pause();

})

resetBtn.addEventListener("click",()=>{
    reset();
    container1.classList.remove("hidden");
    container2.classList.add("hidden");
    playBtn.classList.add("hidden");
    resetBtn.classList.add("hidden");
    playBtn.classList.remove("hidden");
    pauseBtn.classList.add("hidden");
})
