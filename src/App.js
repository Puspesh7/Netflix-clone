import './App.css';
import Homescreen from './screens/Homescreen.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen.js';
import { useEffect,useState } from 'react';
import {auth} from "./firebase.js";
import { onAuthStateChanged } from '@firebase/auth';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const [user,setUser] = useState(null);
  const [profileButton,setProfileButton] = useState(false);
  useEffect(() =>{
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
         console.log(user.email);
      } else {
        // User is signed out
      }
  });
  return unsubscribe;
  } ,[]);
  const getUser = (user) =>{
    if(user){
      setUser(user);
    }
  }
  const getProfileButton = (status) =>{
    if(status)
      setProfileButton(true);
    else
      setProfileButton(false);
  }

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen getUser = {getUser}/>
        ) : (
        <Switch>
          <Route path="/">
            {!profileButton ? (
              <Homescreen getProfileButton = {getProfileButton}/>
            ) : (
              <ProfileScreen getProfileButton = {getProfileButton}  />
            )}
          </Route>
        </Switch>)}
      </Router>
    </div>
  );
}

export default App;
