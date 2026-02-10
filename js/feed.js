window.addEventListener("DOMContentLoaded",function(){
    async function loaderS(){
     const {data,error}=await supabase
     .from("mainpost")
     .select("*")
     .order("created_at",{ascending:false})
    if(error){
        console.error(`error vro l : ${error.message}`)
        return
    }
    const main$$feedr=document.querySelector("feed")
    main$$feedr.innerHTML=''
    data.forEach(dihpost=>{
        const postdih=document.createElement("div")
        postdih.innerText=dihpost.content
        postdih.title=dihpost.author
        main$$feedr.appendChild(postdih)
    })
    }
    loaderS()
})
