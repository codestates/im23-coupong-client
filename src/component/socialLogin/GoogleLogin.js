import React from 'react';
import GoogleLogin from 'react-google-login';
import CONFIG from '../../config/config.json';
import { useHistory } from "react-router-dom";



function GoogleLoginComp(props) {

  let history = useHistory();

  const responseGoogle = (res) => {
    sessionStorage.setItem("login_type", "google");
    sessionStorage.setItem("user_id", 3)
    sessionStorage.setItem("user_name", res.profileObj.name);
    sessionStorage.setItem("user_email", res.profileObj.email);
    sessionStorage.setItem("user_profile", res.profileObj.imageUrl);
    sessionStorage.setItem("user_birth", "");

    props.usrUpdate(res.profileObj.name);
    history.push('/')

  }

  const responseGoogleFail = (res) => {
    console.log(res);
  }


  return (
    <div className="google-login social-login" >
      <GoogleLogin
        clientId={`${CONFIG.GOOGLE_AUTH_CLIENT_ID}.apps.googleusercontent.com`}
        render={renderProps => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Login with Google</button>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogleFail}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export default GoogleLoginComp;