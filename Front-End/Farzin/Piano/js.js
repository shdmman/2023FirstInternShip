const noteShowing = document.querySelector(".note-showing")
const allKeys = document.querySelectorAll(".key")
const allHints = document.querySelectorAll(".hints")


window.addEventListener("keydown" , function(e){
 const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
 const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
 
 if(! key ) return
 const keyNote = key.getAttribute("data-note")
 noteShowing.innerHTML = keyNote
 key.classList.add("playing")
 audio.currentTime = 0
 audio.play();

})

allHints.forEach(function(elme , index){
    elme.style =`transition-delay : ${index * 50}ms`
})


function removeTransition(){
    this.classList.remove("playing")
}

allKeys.forEach(key => key.addEventListener("transitionend" , removeTransition))

let obj = {
    name : "farzin" ,
    age : 17
}

Object.keys(obj).forEach(item => console.log(item))
