import React from  'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes } from 'react-router-dom';
import Navbar from "./components/navbar.component";
import ExerciseList from  "./components/exercises-list.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";


function App() {
  return (
    <Router>
        <Navbar />
        <br />
          <Routes>
              <Route path="/" exact element={<ExerciseList />} ></Route>
              <Route path="/create"  element={<CreateExercise />} />
              <Route path="/user"  element={<CreateUser />} />
          </Routes>
    </Router>
     
  );
}

export default App;
