import './App.css';
import Nav from './component/Nav';
import { MyPage, Main, Login, SignUp, CouponSetUp } from './pages';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/mypage">
            <MyPage />
          </Route>
          <Route path="/login">
            <Login />
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
  );
}

export default App;
