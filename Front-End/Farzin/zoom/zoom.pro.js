(function(window){

    let defineLibrary = () => ({
        init : function(galleryId) {
            
            let contain = document.querySelector(galleryId)
            
            if(!contain) {
                console.error("please set the coorect element")
                return
             }
             else{
                 console.log('upload succses' )
                
            }
             
            let defaultImage = document.querySelector(".img-preview") 
            let zoomArea = document.querySelector(".zoom-arena")
             
            if(! defaultImage) {
                console.error("please set image");
                return;
            }

            if(! zoomArea) {
                console.error("please set .zoom-arena tag ");
                return;
            }
            
            zoomArea.style.backgroundImage = `url(${defaultImage.src})`
            
            let pictures  = document.querySelectorAll(".img-preview")
            if(pictures){
                pictures.forEach(image => {
                    image.addEventListener("click" ,  function setUpNewImage(){
                        zoomArea.style.backgroundImage = `url(${image.src})`
                    })

                });
               
            }
            zoomArea.addEventListener("mouseenter" , function(){
                this.style.backgroundSize = "250%"
            })

            zoomArea.addEventListener('mousemove' , function(e){
                let deco = this.getBoundingClientRect() 
                
                let x = e.clientX - deco.left
                let y = e.clientY - deco.top  
                x = Math.round( 100 / (deco.width / x)) 
                y = Math.round(100 / (deco.height /y))  

                this.style.backgroundPosition = `${x}% ${y}%`
                
            })

            zoomArea.addEventListener('mouseleave' , function(){
                this.style.backgroundSize = "cover"
                this.style.backgroundPosition = "center"
            })

        } 

        
    })

if(typeof(vaniilaZoom) == 'undefined'){
    window.vaniilaZoom =  defineLibrary() ;
}else {
    console.log('library already defined.')
}

})(window)

