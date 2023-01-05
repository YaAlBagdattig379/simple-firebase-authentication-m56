import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 
                                   "firebase/auth";
import app from './firebase.init';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user,setUser] = useState({});

  const provider = new GoogleAuthProvider();
  // sign in by google 
  const handleGoogleSignIn = () =>{
       signInWithPopup(auth,provider)
       .then(result=>{
          const user = result.user
          setUser(user);
          console.log(user);
       })
       .catch(error=>{
        console.log(error)
       })
  }
  // sign out by google 
  const  handleGoogleSignOut = () =>{
     signOut(auth)
     .then( ()=>{
         setUser({})
     })
     .catch( error=>{
         setUser({})
     })
     }
  return (
    <div className="App"style={{'margin': '10px'}}>
      {
        user.email ? <button onClick={handleGoogleSignOut}>Google Sign Out</button> : <button onClick={handleGoogleSignIn}>Google Sign In</button>
      }
    
    <h4>user : {user.displayName}</h4>
    <h4>email : {user.email}</h4>
    <img src={user.photoURL} alt="" />
    </div>
  );
}
export default App;




