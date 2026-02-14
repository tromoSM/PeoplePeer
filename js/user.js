window.addEventListener("DOMContentLoaded",async function(){
 const {data}=await supabase.auth.getSession()
 if(data.session){
    document.querySelectorAll(`sign`).forEach(dih=>{
        dih.remove()
    })
 }
})
