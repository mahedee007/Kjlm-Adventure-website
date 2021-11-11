
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home/Home';
import Signin from './components/Home/Signin/Signin';
import Register from './components/Home/Register/Register';
import Destinations from './components/Home/Destinations/Destinations';
import DestinationBooking from './components/Home/DestinationBooking/DestinationBooking';
import MyBooking from './components/Home/MyBooking/MyBooking';
import ManageBooking from './components/Home/ManageBooking/ManageBooking';
import AddTour from './components/Home/AddTour/AddTour';

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
              <Route exact path='/destinations'><Destinations></Destinations></Route>
              <PrivateRoute exact path="/destinationbooking"><DestinationBooking></DestinationBooking></PrivateRoute>
              <PrivateRoute exact path="/destinationbooking/:destinationId"><DestinationBooking></DestinationBooking></PrivateRoute>
              <PrivateRoute exact path="/myBooking"><MyBooking></MyBooking></PrivateRoute>
              <PrivateRoute exact path="/manageBooking"><ManageBooking></ManageBooking></PrivateRoute>
              <PrivateRoute exact path="/addTour"><AddTour></AddTour></PrivateRoute>
            </Switch>
          
        </Router>


      </AuthProvider>
    </div>
  );
}

export default App;
