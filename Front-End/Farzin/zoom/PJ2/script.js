(function(window){
    let defineLibrary = () => ({
        init : function(imageId) {
            let  theImage = document.querySelector(imageId) 
            if(! theImage){
                console.error("the image dosnt exist ")
                return ;
            }

            let zoomContainer , zoomArea , zoomLens;
            
            theImage.addEventListener("mouseenter" ,function(e){

                let theImageBox = this.getBoundingClientRect()
                console.log(theImageBox) 
                zoomContainer = document.createElement("div");
                zoomContainer.classList.add("zoom-container");
                zoomContainer.style.width = `${theImageBox.width}px`
                zoomContainer.style.height = `${theImageBox.height}px`
                zoomContainer.style.position = "absolute"
                zoomContainer.style.top = `${theImageBox.top + window.pageYOffset}px`
                zoomContainer.style.left = `${theImageBox.left + window.pageXOffset}px`
               
                zoomLens = document.createElement("div")
                zoomLens.classList.add("img-lens")
                
                zoomArea = document.createElement("div")
                zoomArea.classList.add("zoom-area")
                zoomArea.style.position = "absolute"
                zoomArea.style.top = `${theImageBox.bottom + window.pageYOffset }px`

                zoomContainer.insertAdjacentElement("afterbegin" , zoomLens)
                zoomContainer.insertAdjacentElement("afterbegin" , zoomArea)
                document.querySelector("body").insertAdjacentElement("beforeend" , zoomContainer)

                let ox = zoomArea.offsetWidth / zoomLens.offsetWidth
                let oy = zoomArea.offsetHeight / zoomLens.offsetHeight
                
                zoomArea.style.backgroundImage = `url('${theImage.src}')`
                zoomArea.style.backgroundSize = `${theImage.width * ox}px ${theImage.height * oy}px`
                console.log(theImage.width * ox , theImage.height * oy)
                
                zoomContainer.addEventListener("mousemove" , function(e){
                   let x = e.clientX - theImageBox.left
                   let y = (e.clientY + window.pageYOffset ) - theImageBox.top  
                   x = x - (zoomLens.offsetWidth / 2)
                   y = y - (zoomLens.offsetHeight / 2)
                   if( x > theImage.width - zoomLens.offsetWidth){ x = theImage.width - zoomLens.offsetWidth}
                   if( x <  0 ){ x = 0 }
                   if( y > theImage.height - zoomLens.offsetHeight){ y = theImage.height - zoomLens.offsetHeight} 
                   if(y < 0 ){ y = 0 }
                  
                   zoomLens.style.top = `${y}px`
                   zoomLens.style.left = `${x}px`

                   zoomArea.style.backgroundPosition= `-${x * ox}px -${y * oy}px`
                   console.log(x * ox , y * oy)
                })

              

                
               

            })

           
            
            
            
        }
    })

 if(typeof(vanillaZoom) == "undefined"){
     window.vanillaZoom = defineLibrary()
 } else {
     console.log("library has already defined")
 }
})(window)