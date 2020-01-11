import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

//all the paths i have need to be imporrted as well
import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  //if you go to the root site with a slash, it'll load ExercisesList component
  //each comp are created in diff files
  return (
    <Router>
      <div className = "container">
      <Navbar />
      <br />
      <Route path="/" exact component = {ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
