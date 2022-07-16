import { Button } from '@mui/material'

import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

export const SignOutButton = () => {
  // TODO: This should probably not be here?
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  
  function signOutUser() {
    signOut(auth).then(() => {
      // Sign-out successful.
      alert('Logged out!');
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <Button type='submit' color='primary' onClick={() => {signOutUser();}}>
      Log Out
    </Button>
  )
}

