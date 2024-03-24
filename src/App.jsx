import './App.css'
import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import Auth from './Auth'




function App() {
  const [session, setSession] = useState(null)




  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])




  return (
	  <div className="back">
	  <div className="auth">
	  	{!session ? <Auth /> : <Account key={session.user.id} session={session} />}
	  </div>

	  /*<div>
		<img src="CreddySetGo.png" width="400px"/>
	  </div>*/
	  </div>
  )
}

export default App
