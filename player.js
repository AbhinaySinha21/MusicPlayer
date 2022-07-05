var audio=new Audio("./YOASOBIOfficial_Music_Video_(getmp3.pro).mp3");
var playA=document.querySelectorAll(".buttons i")[1];
var back=document.querySelectorAll(".buttons i")[0];
var forw=document.querySelectorAll(".buttons i")[2];
var progress=document.querySelector("input");

playA.addEventListener("click",()=>{
    if(audio.paused || audio.currentTime<=0)
    {audio.play();
    playA.classList.remove("fa-circle-play");
    playA.classList.add("fa-circle-pause");}
    else{
        audio.pause();
        playA.classList.remove("fa-circle-pause");
        playA.classList.add("fa-circle-play");}
    
});
audio.addEventListener("timeupdate",()=>{
    var prog=parseInt((audio.currentTime/audio.duration)*100);
    progress.value=prog;
});
progress.addEventListener("change",()=>{
    audio.currentTime=progress.value*(audio.duration/100);
});
back.addEventListener("click",()=>{
    progress.value=progress.value-(10/audio.duration)*100;
    audio.currentTime=audio.currentTime-10;
});
forw.addEventListener("click",()=>{
    progress.value=progress.value+(10/audio.duration)*100;
    audio.currentTime=audio.currentTime+10;
});