import React, { Component} from 'react';
//import Users from './components/users/Users';
import Users from './components/users/UsersFunctional';
//import Toggle from './components/toggle/Toggle';
import Toggle from './components/toggle/ToggleFunctional';

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
  
  handleShowUsers = (isChecked) => {
    this.setState({ showUsers: isChecked});
  };

  render() {
    const {showUsers, users} = this.state;
    return (
      <div>
        <h3>React LifeCycle</h3>
        <Toggle 
          description='Mostrar usuários'
          enabled={showUsers} 
          onToggle={this.handleShowUsers} />
        <hr/>
        {showUsers && <Users users={users} /> }
      </div>
    )
  }
}