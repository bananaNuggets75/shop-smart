import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { auth } from "../firebase/userApp"; // Adjust the path as needed
import { GithubAuthProvider } from 'firebase/auth';

// FirebaseUI configuration
const uiConfig = {
  signInSuccessUrl: '/', // URL to redirect after successful sign-in
  signInOptions: [
    GithubAuthProvider.PROVIDER_ID,
  ],
};

function SignInScreen() {
  return (
    <div style={{ maxWidth: "320px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1>Login</h1>
      <p>Sign-In</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </div>
  );
}

export default SignInScreen;
