import React from 'react';
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
      user_name: ''
    };

    this.updateUserName = this.updateUserName.bind(this);
  }
  componentDidMount() {
    const usrName = sessionStorage.getItem('user_name') ? sessionStorage.getItem('user_name') : ''
    this.setState({ user_name: usrName })
  }

  updateUserName(name = '') {
    this.setState({ user_name: name });
  }

  // handleLogin() {
  //   console.log('haha')
  //   this.setState({
  //     is_login: !this.state.isLogin
  //   })
  // }

  render() {
    return (
      <div className="App" >
        <Router>
          {/* <Nav isLogin={this.state.is_login} usrName={this.state.user_name} /> */}
          <Nav usrUpdate={this.updateUserName} usrName={this.state.user_name} />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/mypage">
              <MyPage />
            </Route>
            <Route path="/login">
              {/* <Login handleLogin={this.handleLogin.bind(this)} /> */}
              <Login usrUpdate={this.updateUserName} usrName={this.state.user_name} />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/couponsetup">
              <CouponSetUp />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  };
}

export default App;
