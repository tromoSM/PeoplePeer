    window.refresh$$ico=function(){
    document.querySelectorAll("icon").forEach(dih=>{
    let temp$$ic$$data=dih.getAttribute("i").toLowerCase()
    if(temp$$ic$$data=='error'){
        dih.innerHTML="×"
    }
    })
}
window.addEventListener("DOMContentLoaded",function(){
refresh$$ico()
})
