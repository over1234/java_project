import './App.css';
import React, { useEffect } from "react";
import axios from 'axios'
import GoogleLogin from "react-google-login";
const CLIENT_ID = "5d676714199b0600b188a0c343e11426";
const REDIRECT_URI = "http://localhost:3000";
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;


function App() {
  const [userObj, setUserObj] = React.useState({
    email: "",
    name: ""
  })

  const onLoginSuccess = (res) => {
    setUserObj({
      ...userObj,
      email: res.profileObj.email,
      name: res.profileObj.name
    })
  }

  return (
    <div className="App">
      <div className="white-container">
        <span id="login-text">Login</span><br></br>
        <GoogleLogin
          clientId="231820384125-uelj63me0217om0dsjfuqar6ip5sqjpc.apps.googleusercontent.com"
          buttonText="구글로 계속하기"
          onSuccess={onLoginSuccess}
          onFailure={result => console.log(result)}
        />
      </div>
    </div>
  );
}

export default App;
