document.addEventListener("DOMContentLoaded" , function(){
    let preLoader = document.querySelector(".preloader")
    let webPage = document.querySelector(".web-page")
    preLoader.style.display = "none"
    webPage.style.display = "block"
})
function liveClock(){
    let clock = document.querySelector(".clock")
let date = new Date() 

let h = date.getHours()
let m = date.getMinutes()
clock.textContent = `${h} : ${m}` 
}
setInterval(liveClock , 1000)

 let backToTop = document.getElementById("backToTop")
 
   window.addEventListener("scroll" , function(e){
      if(document.documentElement.scrollTop > 0) {
          backToTop.style.display = "flex"
      } else {
          backToTop.style.display = "none"
      }
    
 })

 backToTop.addEventListener("click" , function(e){
    scrollTop( 0 , 1000)
 })

 function scrollTop(scroll , duration){
     let docu = document.documentElement
     let currectTime = duration
     let speedInterval = 10

     let animation  = () => {
         if(currectTime < 0) return;
         setTimeout(() => {
             docu.scrollTop -= docu.scrollTop / (currectTime / speedInterval)
             console.log(docu.scrollTop)
             currectTime -=  speedInterval 
             animation()
         }, speedInterval);
     }
     animation()
    } 