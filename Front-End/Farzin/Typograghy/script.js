const mainElm = document.querySelector(".main")
const text = mainElm.querySelector("h1")
const range = 400 //300 px



mainElm.addEventListener("mousemove" , function(event){
    let { offsetWidth : width , offsetHeight : height } = mainElm ;
    let { offsetX : x , offsetY : y } = event ;
    
    x += event.target.offsetLeft
    y += event.target.offsetTop;

    const xWalk = Math.round(( x / width * range) - (range / 2)) 
    const yWalk = Math.round(( y / height * range) - (range / 2 ))
    console.log(xWalk ,  yWalk)
    text.style.textShadow = `
     ${xWalk}px ${yWalk}px 0 #542e71,
     ${xWalk * -1}px ${yWalk}px 0 #ffc996,
     ${yWalk}px ${xWalk  * - 1}px 0 #1cc5dc,
     ${yWalk * -1}px ${xWalk}px 0 #02475e
     `  
})