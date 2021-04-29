import React, { createContext, useState } from "react";
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import Login from "./components/Login/Login";
import Destination from "./components/Destination/Destination";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
   const [loggedInUser, setLoggedInUser] = useState({});

  return (
    

  <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>


          <PrivateRoute path="/destination/:idVehicle">
            <Destination></Destination>
          </PrivateRoute>





          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>

      </Router>


  </UserContext.Provider>
    


  );
}

export default App;
