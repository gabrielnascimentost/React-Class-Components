import React, { Component } from 'react'
import User from './UserFunctional';

export default class Users extends Component {
    
    constructor() {
        super();

        this.state = {
            secondsVisible: 0,
        };

        this.interval = null;
    }

    componentDidMount(){
        this.interval = setInterval(() => {
            const {secondsVisible} = this.state; 
            this.setState({
                secondsVisible: secondsVisible + 1
            })
        }, 1000)
    }

    componentDidUpdate(){

    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render() {
        const {users} = this.props;
        const {secondsVisible} = this.state;

        return (
            <div>
                <p>Componente visivel por {secondsVisible}</p>
                <ul>
                    {users.map((user) => {
                        const {login} = user;
                        return (
                            <li key={login.uuid}>
                                <User user={user}/>
                            </li>
                        ); 
                    })}
                </ul>
            </div>
        )
    }
}
