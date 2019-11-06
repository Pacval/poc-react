import React from 'react';

export default class CreatePlanet extends React.Component {

    state = {};

    constructor() {
        super();

        this.state = {
            name: '',
            terrain: '',
            population: null
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();

        const data = {
            name: this.state.name,
            terrain: this.state.terrain,
            population: this.state.population
        }

        console.log(JSON.stringify(data));

        fetch('http://localhost:8080/planet/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch(console.log);
    }

    render() {
        return (
            <div>
                <h1>Create a planet</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name of the planet : </label>
                    <input id="name" name="name" type="text" onChange={this.handleChange} />
                    <br />

                    <label htmlFor="terrain">Type of terrain : </label>
                    <input id="terrain" name="terrain" type="text" onChange={this.handleChange} />
                    <br />

                    <label htmlFor="population">Population : </label>
                    <input id="population" name="population" type="number" onChange={this.handleChange} />
                    <br />

                    <button>Save new planet</button>
                </form>
            </div>
        );
    }
}