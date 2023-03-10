import './App.css';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 
                                   "firebase/auth";
import app from './firebase.init';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user,setUser] = useState({});

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  // sign in by google 
  const handleGoogleSignIn = () =>{
       signInWithPopup(auth,googleProvider)
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
  const handleGitHubSignIn = () =>{
     signInWithPopup(auth,gitHubProvider)
     .then(result=>{
      const user = result.user
      setUser(user)
      console.log(user);
     })
     .catch(error=>{
      console.error(error);
     })

  }   
  return (
    <div className="App"style={{'margin': '10px'}}>
      {
        user.uid ? <button onClick={handleGoogleSignOut}>Google Sign Out</button> :
        <>
            <button onClick={handleGoogleSignIn}>Google Sign In</button>
            <button onClick={handleGitHubSignIn}>GitHub Sign In</button>
        </>
         
      }
    <h4>user : {user.displayName}</h4>
    <h4>email : {user.email}</h4>
    <img src={user.photoURL} alt="" />
    </div>
  );
}
export default App;
