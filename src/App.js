// IMPORT REACT AND BROWSER REACT=====================================
import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "./Main.css";






// IMPORT ALL COMPONENTS=====================================
//all the paths i have need to be imporrted as well
import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import Home from "./components/home.component";





// Put everything in a container and make the diff pages and what they route to ====
function App() {
  //if you go to the root site with a slash, it'll load ExercisesList component
  //each comp are created in diff files
  return (
    <Router>
      <div className = "container">
      <Navbar />
      <br />
      <Route path="/list" exact component = {ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      <Route path ="/home" component={Home} />
      </div>
    </Router>
  );
}


// EXPORT
export default App;
