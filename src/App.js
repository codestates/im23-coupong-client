import React from 'react';
import { Redirect } from "react-router-dom";
import './App.css';
import Nav from './component/Nav';
import { MyPage, Main, Login, SignUp, CouponSetUp } from './pages';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// function App() {
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_name: '',
      redirect: null
    };

    this.updateUserName = this.updateUserName.bind(this);
    this.updateRedirect = this.updateRedirect.bind(this);
    this.goToHome = this.goToHome.bind(this);
    this.requireAuth = this.requireAuth.bind(this);
  }


  componentDidMount() {
    const usrName = sessionStorage.getItem('user_name') ? sessionStorage.getItem('user_name') : ''
    this.setState({ user_name: usrName })
  }

  updateUserName(name) {
    this.setState({ user_name: name });
    return;
  }

  updateRedirect(url) {
    this.setState({ redirect: url })
  }

  goToHome() {
    <Redirect to={this.state.redirect} />
    return;
  }

  requireAuth() {
    if (sessionStorage.getItem('user_id')) {
      return true
    } else {
      return false
    }
  }

  render() {

    console.log(this.state)
    return (
      < div className="App" >
        <Router >
          <Nav
            usrUpdate={this.updateUserName}
            usrName={this.state.user_name}
            updateRedirect={this.updateRedirect}
            goToHome={this.goToHome}
          />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/mypage" render={() => {
              return this.requireAuth() ? (
                <MyPage />
              ) : (
                  <Redirect to="/login" />
                )
            }} />
            <Route path="/login">
              <Login usrUpdate={this.updateUserName} usrName={this.state.user_name} />
            </Route>
            <Route path="/signup">
              <SignUp usrUpdate={this.updateUserName} />
            </Route>

            <Route exact path="/couponsetting" render={() => {
              return this.requireAuth() ? (
                <CouponSetUp />
              ) : (
                  <Redirect to="/login" />
                )
            }} />
          </Switch>
        </Router>
      </div >
    )
  };
}

{/* 
  <Route exact path="/home" render={() => (
  isLoggedIn() ? (
    <Redirect to="/front"/>
  ) : (
    <Home />
  )
)}/> 
*/}

export default App;
