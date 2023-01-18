import React, { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  //   setIsSignIn(isSignIn);
  return (
    <>
      {isSignIn ? (
        <SignIn setIsSignIn={setIsSignIn} />
      ) : (
        <SignUp setIsSignIn={setIsSignIn} />
      )}
      {/* <SignIn />
      <SignUp /> */}
    </>
  );
};

export default AuthPage;
