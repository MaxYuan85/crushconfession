import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import GoogleButton from 'react-google-button'

export const SignInButton = () => {
  // TODO: This should probably not be here?
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  
  function signIn() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential!.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user.displayName);
        console.log(user.email);
      }).catch((error) => {
        // TODO: What the fuck do I do here?
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log('ERROR');
      });
  }

  return (
    <GoogleButton onClick={() => {signIn();}}/>
  )
}

