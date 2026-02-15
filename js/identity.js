const SUPABASE_URL="https://unalxdcdbgrqvveetxsn.supabase.co"
const SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVuYWx4ZGNkYmdycXZ2ZWV0eHNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2MDkyNTUsImV4cCI6MjA4NjE4NTI1NX0.8o5IZ_bs-8HaX70sP-e5_OUQfm5jyzXP6XMII1BoGSw"
window.supabase=supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
 )
 
window.loginG=async function(){
    await supabase.auth.signInWithOAuth({
    provider:"google"
    })
}
async function signE(){
    const{data,error}=await supabase.auth.signInWithPassword({
        email: document.querySelector(`[val="mailin"]`).value.trim(),
        password:document.querySelector(`[val="passin"]`).value.trim()
    
    }   
)
    if(error){
        console.error(error.message)
        return
    }
}
async function signUP(){
    const{data,error}=await supabase.auth.signUp({
        email: document.querySelector(`[val="mailup"]`).value.trim(),
        password:document.querySelector(`[val="passup"]`).value.trim()
    
    })
    if(error){
        console.error(error.message)
        return
    }
    else{
        if(data.session){
            document.querySelector('[si="sign"]').style.display="none"
            document.querySelector('[si="sign"]').style.display="flex"
        }
    }
}

/* 

    if (data.session) {
        document.querySelector('[si="sign"]').style.display = "none"
        document.querySelector('[si="infoin"]').style.display = "flex"
    }
}
*/
async function getin(){
    const user=data.user
    await supabase.from("profiles").insert([
    {
            id: user.id,
            username: document.querySelector('[val="usrname"]').value.trim(),
            birthday: document.querySelector('[val="date"]').value,
            avatar_url:null
    }
    ])
}
