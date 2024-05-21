import Login from "./components/Login/Login";
import Nav from "./components/Navigations/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Register from "./components/Register/Register";

function App() {
  return (
    <Router>
      <div className='app-container'>
        {/* <Nav /> */}
        <Switch>
          <Route path="/about">
            About
          </Route>
          <Route path="/news">
            News
          </Route>
          <Route path="/" exact>
            Home
          </Route>
          <Route path="/login">
            <Login>login</Login>
          </Route>
          <Route path='/register'>
            <Register>register</Register>
          </Route>
          <Route path="*">404</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;