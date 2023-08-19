class draggable {
    theSrcElm;
    list;
    update;
    constructor(options) {
        this.setuplist(options)
        this.list = options.list   
        if(options.update) this.update = options.update
        for( let listItem of options.el.children){
          this.addDnDHandlers(listItem)
         
        }
    }
    setuplist(options){
      let { list , el : element , template } = options;

      if(! list) throw Error(" The list is not exist ")
      if(! element) throw Error(" The element is not exist ")
      if(! Array.isArray(list)) throw Error(" The list is not  an array , please insert an array ")
      if(! template) throw Error(" The template is not exist")
      
      list.forEach(item =>  element.innerHTML += template(item)) 
    }
    addDnDHandlers(element){
      element.setAttribute("draggable" , true ),
     
      element.addEventListener("dragstart" , this.handleDragStart.bind(this)),
      element.addEventListener("dragenter" , this.handleDragEnter.bind(this)),
      element.addEventListener("dragover" , this.handleDragOver.bind(this)),
      element.addEventListener("dragleave" , this.handleDragLeave.bind(this)),
      element.addEventListener("drop" , this.handleDragDrop.bind(this)),
      element.addEventListener("dragend" , this.handleDragEnd.bind(this))
    }
    handleDragStart(e) {
      this.theSrcElm = e.target
      e.dataTransfer.setData("text/html" , e.target.outerHTML)
      e.target.classList.add("dragElm")
      }

    handleDragEnter(e){}

    handleDragOver(e){
      if(e.preventDefault) e.preventDefault()
      e.target.classList.add("over")
    }

    handleDragLeave(e){
      e.target.classList.remove("over")
    }

    handleDragDrop(e){ 
        let target = e.target.closest(".list-item")
       
        if(this.theSrcElm != target) {
        let dropText = e.dataTransfer.getData("text/html")
        target.insertAdjacentHTML("beforebegin" , dropText)
        target.parentNode.removeChild(this.theSrcElm)
        this.addDnDHandlers(target.previousSibling)
      } 
      
      e.target.classList.remove("over")
     
    }

    handleDragEnd(e){
     e.target.classList.remove("dragElm")
     let newList = []
     list.querySelectorAll('.list-item').forEach(elm => newList.push(this.list.find(item => elm.id == item.id)))
     this.update(newList)
    }
    

}
    
