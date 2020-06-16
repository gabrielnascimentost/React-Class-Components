import React, { Component} from 'react';
import Users from './components/Users/Users';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      users:[],
      showUsers: false  
    }
  }

  async componentDidMount(){
    const res = await fetch('https://randomuser.me/api/?seed=rush&results=10&nat=BR&noinfo');
    const json = await res.json();
    this.setState({
      users: json.results,
    });
  }

  componentDidUpdate(){

  }

  componentWillUnmount(){

  }

  handleShowUsers = (event) => {
    this.setState({ showUsers: event.target.checked});
  };

  render() {
    const {showUsers, users} = this.state;
    console.log(users);
    return (
      <div>
        <div className="switch">
            <label>
              Mostrar usuários
              <input type="checkbox" onChange={this.handleShowUsers}/>
              <span className="lever"></span>
            </label>
        </div>
        <hr/>
        {showUsers && <Users users={users} /> }
      </div>
    )
  }
}