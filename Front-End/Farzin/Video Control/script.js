let playManeger = document.querySelector(".myplayer")
let video = playManeger.querySelector("video")
let play  = document.querySelector(".play")
let rewind = document.querySelector(".rewind")
let forward = document.querySelector(".forward")
let currentTime = document.querySelector(".currentTime")
let timer = document.querySelector(".timer")
let videoTime = document.querySelector(".videoTime")
let timerBar = document.querySelector(".controls__progressbar-current")   
let volumeIcon = document.querySelector(".volume .icon")
let volumeProgressBar = document.querySelector(".volume .volume__progress")
let volumeProgressBarInput = volumeProgressBar.querySelector("input") 
let fullscreen = document.querySelector(".fullscreen") 


play.addEventListener("click" , function(e){
    videoTime.textContent = getTime(video.duration)    
    if (video.paused) {
        togglePlayIcon()
        video.play() 
    } else {
        togglePlayIcon()
        video.pause()
    }
})

timerBar.addEventListener("input" , function() {
    video.currentTime = ((this.value / 100) * video.duration)
})


function togglePlayIcon() {
    let icon = play.querySelector("i")
    icon.classList.toggle("ion-md-play")
    icon.classList.toggle("ion-md-pause")
}


rewind.addEventListener("click" , function(e) {
    video.currentTime = video.currentTime - 10
})

forward.addEventListener("click" , function(e) {
    video.currentTime = video.currentTime + 10
})
 video.addEventListener("timeupdate" , function() {
      currentTime.textContent = getTime(video.currentTime)
        
      let barLength = ((video.currentTime / video.duration) * 100)
      timerBar.style =`background: linear-gradient(90deg, rgba(230,126,34,1) ${barLength}%, #e1e1e1 0%)` 
      timer.value = barLength
 })

 video.volume = .5

 volumeIcon.addEventListener("click" , function() {
    volumeProgressBar.classList.toggle("active")
  })

  volumeProgressBarInput.addEventListener("input" , function(){
      video.volume = this.value / 100 
      this.style = `background :  linear-gradient(90deg, rgba(230,126,34,1) ${this.value}%, #e1e1e1 0%)`
  })

   function getTime(time) {
    let minutes = Math.floor(time / 60 )
    let seconds = Math.floor(time - (minutes * 60))
    
    let minuteValues ;
    let secondValues ;
    
    if(minutes < 10) {
        minuteValues = '0' + minutes
    } else {
        minuteValues = minutes
    }
    
    if(seconds < 10) {
        secondValues = "0" + seconds  
    } else {
        secondValues = seconds
    }
    
    return minuteValues + ":" + secondValues 
   }

 fullscreen.addEventListener("click" , function(){
     if (!document.fullscreenElement) {
        if(playManeger.requestFullscreen) {
            playManeger.requestFullscreen();
        } else if(playManeger.mozFullScreenElement) {
            playManeger.mozFullScreenElement()
        } else if(playManeger.msFullscreenElement) {
            playManeger.msFullscreenElement()
        } else if(playManeger.webkitFullscreenElement) {
            playManeger.webkitFullscreenElement()
        }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen(); 
      } else if(document.mozCancelFullscreen) {
        document.mozCancelFullscreen(); 
      } else if(document.msCancelFullscreen) {
        document.msCancelFullscreen(); 
      } else if(document.webkitCancelFullscreen) {
        document.webkitCancelFullscreen(); 
      }
    }
})
 