window.addEventListener("DOMContentLoaded",function(){
   window.POSTSUB=async function(){
    const main$$in=document.querySelector("[tromoSM='maininbar']")
    const main$$val=main$$in.value.trim()
    if(!main$$val){
        return
    }
    const {error}=await supabase
    .from("mainpost")
    .insert([{content:main$$val,author:'tromoSM'}])
    if(error){
        console.error(`error : ${error}`)
    }
    else{
        main$$in.value=''
    }
}

})
