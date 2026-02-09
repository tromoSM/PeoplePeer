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
