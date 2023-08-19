 afw     let startButton = document.querySelector("#start-button")
let inputText = document.querySelector("#input-text")
let errorMassage = document.querySelector("#error-massage")
let timerCircle = document.querySelector(".c100")
let loadingMassage = document.querySelector("#loading-massage")
let succsesMassage = document.querySelector("#succses-massage")
let timeCount = document.querySelector(".c100 > span")
let stopButton = document.querySelector("#stop-button")
let stopMassage = document.querySelector("#stop-massage")
stopButton.style.display = "none"
let timeId 
let seconds

startButton.addEventListener("click" , function(e){
     seconds = parseInt(inputText.value)
    

    if(isNaN(seconds)){
        errorMassage.textContent = "لطفا زمان خود را به درستی وارد کنید"
        errorMassage.style.display = "block" 
        return
     }

     errorMassage.style.display = "none"
     timerCircle.style.display = "block"
     document.querySelector(".part1").style.display = "none"
     loadingMassage.style.display = "block"
     succsesMassage.style.display = "none" 
     stopButton.style.display = "block"
     stopMassage.style.display = "none"
         
     let originalSeconds = seconds
     let  lastPersent = "p100"
      timeId = setInterval(() => {
       if(lastPersent){
           timerCircle.classList.remove(lastPersent)
       }       

       if(seconds <= 0){
             clearInterval(timeId)

             succsesMassage.style.display = "block"
             loadingMassage.style.display =  "none"
             document.querySelector(".part1").style.display = "block" 
             timerCircle.style.display = "none"
             stopButton.style.display = "none"
             inputText.value = ""
             return
       }    
         let percent = Math.floor( ( ( originalSeconds - seconds ) / originalSeconds ) * 100 )
         lastPersent = `p${percent}`
         timerCircle.classList.add(`p${percent}`)
         timeCount.textContent = seconds
         seconds -=1
     }, 1000);
       
 })
 

 stopButton.addEventListener("click" , function(e) {
     clearInterval(timeId)

     timerCircle.style.display = "none"
     document.querySelector(".part1").style.display = "block"
     succsesMassage.style.display = "none"
     loadingMassage.style.display = "none"
     stopButton.style.display = "none"
     stopMassage.textContent = "شمارنده متوقف شد "
     stopMassage.style.display = "block"   
     inputText.value= ""
     return

 })