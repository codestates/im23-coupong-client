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

  render() {
    return (
      <div className="App" >
        <Router >
          <Nav usrUpdate={this.updateUserName} usrName={this.state.user_name} />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/mypage">
              <MyPage />
            </Route>
            <Route path="/login">
              <Login usrUpdate={this.updateUserName} usrName={this.state.user_name} />
            </Route>
            <Route path="/signup">
              <SignUp usrUpdate={this.updateUserName} />
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
