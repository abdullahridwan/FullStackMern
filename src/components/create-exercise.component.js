import React, { Component } from 'react';
import axios from 'axios'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component{
    //(1) Create a constructor 
    constructor(props) {
        //need to call super when desigin construtoro of a subclass
        super(props)


        /* PRECAUTION: binds 'this' to each method. Otherwise, 'this
        in each method is undefined */
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        /*  state is how we create variables in react
        this way, when we update the state, we also update the page
        with new values */
        this.state = {
            username : '',
            description: '',
            duration: 0,
            date: new Date(),
            users: [] //DropDown Menu to select any User in Database 
        }
    }
//-----------------------------------------------------------------------------------------------
    //(2)Now we have methods to update our constructor

    /*lifecycle mehtod : called before anything is displayed on the page*/
    componentDidMount(){
        axios.get('http://localhost:5000/users/')
            .then(response => {
                if (response.data.length > 0 ){
                    this.setState({
                        //if there is one user. . . 
                        //for every single item in MongoDB, we dont want the entire card, 
                        //we only want the username. Hence, 
                        users: response.data.map(user => user.username),
                        username: response.data[0].username
                    })
                }
            })
    }
    /* Given a form where user enters username, fxn is called on 
    the target (TXTBOX) and the username is updated to name inputted in txtbox  */
    onChangeUserName(e){
        this.setState({
            username: e.target.value
        });
        
    }

        /* Given same form, description is updated */
    onChangeDescription(e){
        this.setState({
            description: e.target.value
        });
        
    }

        /* Given same form, duration is updated */
    onChangeDuration(e){
        this.setState({
            duration: e.target.value
        });
        
    }

        /* Given calendar, date is updated */
    onChangeDate(CalDate){
        this.setState({
            date: CalDate
        });
        
    }

    /*Submit Information */
    onSubmit(e){
        e.preventDefault(); //prevents default html form 

        //variables can only be created and used within a single method
        const exercise = {
            username: this.state.username, 
            description: this.state.description, 
            duration: this.state.duration, 
            date: this.state.date, 
        }

        axios.post('http://localhost:5000/exercises/add', exercise)
            .then(res => console.log(res.data));

        window.location = '/' //take the person back to the homepage i.e list of exercises
    }

//----------------------------------------------------------------------------------------------
    render(){
        return (
            <div>
                <h3>Create New Exercise Log</h3>
                <form onSubmit = {this.onSubmit}>
                    <div className = "form-group">
                        <label> Username: </label>
                        <select ref="userInput"
                            required 
                            className="form-control"
                            value= {this.state.username}
                            onChange={this.onChangeUserName}>
                            {
                                this.state.users.map(function(user){
                                    return <option
                                    key={user}
                                    value={user}>{user}
                                    </option>;
                                })
                            }
                        </select>
                    </div>

                    <div className="form-group">
                        <label> Description </label>
                        <input type="text"
                            required
                            className = "form-control"
                            value = {this.state.description}
                            onChange = {this.onChangeDescription}
                            />
                    </div>

                    <div className="form-group">
                        <label>Duration (in minutes)</label>
                        <input
                            type="text"
                            className = "form-control"
                            value = {this.state.duration}
                            onChange={this.onChangeDuration}
                        />
                    </div>

                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Exercise Log" className="btn btn-primary"/>
                    </div>


                </form>
            </div>
        )
    }
}