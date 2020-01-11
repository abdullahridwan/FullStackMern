import React, { Component, useImperativeHandle } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Exercise = props => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0,10)}</td>
        <td>
            <Link to={"/edit/" + props.exercise._id}>edit</Link> | <a href="#" onClick={()=> {props.deleteExercise(props.exercise._id) }}> delete </a>
        </td>
    </tr>
)


// class react component 
export default class ExercisesList extends Component{
    constructor (props){
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);

        this.state = {exercises: []};
    }

    /* get list of exercises from data base */
    componentDidMount(){
        axios.get('http://localhost:5000/exercises/')
            .then(response => {
                this.setState({exercises: response.data})
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteExercise(id){
        axios.delete('http://localhost:5000/exercises/'+id)
            .then(res=> console.log(res.data));

        /*  
        setState automatically updates the component
        this.state.exercises is the array of exercises
        then we filter is st only ones that DONT have the same id are returned */
        this.setState({
            exercises: this.state.exercises.filter(el => el._id !== id)
            //id in mongodb is written as _id. hence, el._id
        })
    }

    exerciseList(){
        return this.state.exercises.map(currentexercise => {
            return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />;
        })
    }

    render(){
        return (
            <div>
                <h3> Logged Exercises</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.exerciseList()}
                    </tbody>
                </table>
            </div>
        )
    }
}