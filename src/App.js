import './App.css';
import app from './firebase.init';
import { getAuth, signInWithPopup ,GoogleAuthProvider } from "firebase/auth";
// import {  } from "firebase/auth";

const auth = getAuth(app);

function App() {
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () =>{
     signInWithPopup(auth,provider)
    .then(result =>{
      const user = result.user;
      console.log(user)
    }).catch(error =>{
      console.log(error,'error')
    })

  }
  return (
    <div className="App"style={{'margin': '10px'}}>
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
    </div>
  );
}

export default App;




