import React, { Component } from 'react';
import CardList from '../components/card-list';
import SearchBox from '../components/searchbox';
import '../styles/app.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                return response.json();
            })
            .then((users) => {
                this.setState({ robots: users })
            });
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const loading = this.state.robots.length === 0;

        const filteredRobots = this.state.robots.filter(
            (robot) => robot.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase())
        );

        return (
            <div className='app'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList list={filteredRobots} isLoading={loading} />
            </div>
        );
    }
}

export default App;