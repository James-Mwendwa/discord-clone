import React from "react";
import "./Login.css";
import Button from "@mui/material/Button";

import { auth } from './Firebase';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const signIn = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
      .then((res) => {
          console.log(res)
      })
      .catch((err) => {
          console.log(err)
      })
  };

  return (
    <div className="login">
      <div className="login-logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAmkXonZOda-JIo-8kPXRVgnPfnn2O0B8-VoXxf5chZVxGPFplCJ7SaPuNlcKbjaGH5Lo&usqp=CAU"
          alt="Logo"
        />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
};

export default Login;
