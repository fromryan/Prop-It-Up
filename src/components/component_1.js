import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: props.age
        }
    }
    
    
    handleClick = () => {
        this.setState({
            age: this.state.age += 1
        })
    }

    render() {
        const {firstName, lastName, age, hairColor} = this.props
        return (
            <div class="mb-5">
                <h1 class="display-5">{lastName}, {firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button type="button" class="btn btn-secondary" onClick={this.handleClick}>Birthday Button for {firstName} {lastName}</button>
            </div>
        )
    }
}

export default PersonCard;