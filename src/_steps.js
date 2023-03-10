/*
        **** STEPS TO USE Firebase ****
 
    1. Create a project on console. firebase.google.com
    2. npm Install firebase 
    3. Register web app in firebase
    4. Copy firebase init with config from firebase project  settings 
        into a file firebase.init.js
    5. export default app from firebase.init.js 
    6. import app firebase init.js into your app.js
    7. import getAuth from firebase/auTh and create auth = getAuth(app)
    8. turn on google authentication 
    9. create google provider
    10. use signUpWithPopUp and pass 'auth' and 'provider' as a parameter; 
    11. handle .then (if successful) .catch(if got error)  
*/



/**         //  made it by programming hero
 * 
 * Steps to use firebase
 * 1. Create a project on console.firebase.google.com
 * 2. npm install firebase 
 * 3. Register Web app in firebase
 * 4. copy firebase init with config from firebase project settings into
 *                      a file firebase.init.js
 * 5. export default app from firebase.init.js
 * 6. import getAuth from firebase/auth and create const auth = getAuth(app)
 *                                                   in App.js
 * 7. import app firebase init.js into your app.js
 * 8. turn on google authentication (firebase >authentication> enable google   
 *                                                       sign in)
 * 9. create google provider
 * 10. use signInWithPopup and pass auth and provider
 * 11. handle .then (if successful) and catch error (if error) 
 */