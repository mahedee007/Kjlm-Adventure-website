
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthProvider from './context/AuthProvider';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home/Home';
import Signin from './components/Home/Signin/Signin';
import Register from './components/Home/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
            <Switch>
            <Route exact path='/'><Home></Home></Route>
              <Route exact path='/home'><Home></Home></Route>
              <Route exact path='/signin'><Signin></Signin></Route>
              <Route exact path='/register'><Register></Register></Route>
            </Switch>
          
        </Router>


      </AuthProvider>
    </div>
  );
}

export default App;
