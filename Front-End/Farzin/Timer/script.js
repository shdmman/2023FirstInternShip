let input = document.querySelector('#input')
let button = document.querySelector('#button')
let errorMassage = document.querySelector("#errormassage")
let sucssesMassage = document.querySelector(".sucsses")
let loadingMassage = document.querySelector(".loading") 
let timerCircle = document.querySelector(".c100");
let timecount = document.querySelector(".c100 > span")
let stopButton = document.querySelector("#stopButton")


button.addEventListener("click" , function(e){
   let seconds = parseInt(input.value)
   
  if(isNaN(seconds)){
   errorMassage.textContent = "زمان را به درستی وارد کنید"
   errorMassage.style.display = "block"
   return
  }
  
  errorMassage.style.display = 'none'
  timerCircle.style.display = 'block'
  loadingMassage.style.display = 'block'
  document.querySelector(".part1").style.display = "none"
  sucssesMassage.style.display= 'none'
  timecount.textContent = seconds
  stopButton.style.display = "block"

  
  
 let originalSeconds = seconds
 let lastPersent = "p100" 
 let timeId = setInterval(() => {
    if(lastPersent){
        timerCircle.classList.remove(lastPersent)}
    if(seconds <= 0 ) {
        clearInterval(timeId)
        
            sucssesMassage.style.display= 'block'
            timerCircle.style.display = "none"
            loadingMassage.style.display = "none"
            stopButton.style.display =  
            document.querySelector(".part1").style.display = "block" 
            input.value = ""
            return
    }

     let percent = Math.floor( ( (originalSeconds - seconds ) / originalSeconds ) * 100 )
     lastPersent = `p${percent}`
     timerCircle.classList.add(`p${percent}`)
seconds -=1
 timecount.textContent = seconds
}, 1000);

})




