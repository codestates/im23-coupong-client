import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import CONFIG from '../../config/config.json';
import { useHistory } from "react-router-dom";



function FacebookLoginComp(props) {

  let history = useHistory();

  const responseFacebook = (res) => {
    console.log(res);
    sessionStorage.setItem("login_type", "facebook");
    sessionStorage.setItem("user_name", res.name);
    sessionStorage.setItem("user_email", res.email)
    sessionStorage.setItem("user_profile", res.picture.data.url);
    sessionStorage.setItem("user_birth", "");
    props.usrUpdate(res.name);
    history.push('/')
  }


  return (
    <div className="fb-login social-login" >
      <FacebookLogin
        appId={CONFIG.FACEBOOK_APP_ID}
        fields="name,email,picture"
        callback={responseFacebook}
        render={renderProps => (
          <button onClick={renderProps.onClick}>Login with Facebook</button>
        )}
      />
    </div>
  )
}

export default FacebookLoginComp;