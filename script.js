document.querySelectorAll("button").forEach(function(el){
    el.addEventListener("click",function(){
    if(!this.dataset.secname)
      return;
     var tmp = this.innerHTML;
     this.innerHTML = this.dataset.secname;
     this.dataset.secname = tmp;
  },false)
})