window.addEventListener("DOMContentLoaded",function(){
    window.errorr= function(t){    
       let temp$$el$notiff=document.createElement("notify")
       let temp$$el$notif=document.createElement("notification")
       temp$$el$notif.setAttribute("sys",'error')
       let temp$$el$row=document.createElement("row")
       let temp$$el$ic=document.createElement('icon')
       temp$$el$ic.setAttribute('i','error')
       let temp$$el$$sysm=document.createElement("sys-msg")
       temp$$el$row.appendChild(temp$$el$ic)
       temp$$el$row.appendChild(temp$$el$$sysm) 
       let temp$$el$$dc=document.createElement("dialcon")
       let temp$$el$$bt=document.createElement("button")
       temp$$el$$bt.innerHTML='OK'
       temp$$el$$dc.appendChild(temp$$el$$bt)
       temp$$el$$sysm.innerHTML=t
       temp$$el$$bt.addEventListener("click",function(){
        temp$$el$notiff.remove()
       })
      temp$$el$notif.appendChild(temp$$el$row) 
      temp$$el$notif.appendChild(temp$$el$$dc) 
      temp$$el$notiff.appendChild(temp$$el$notif)
       document.body.appendChild(temp$$el$notiff)

       refresh$$ico()
    }
})

