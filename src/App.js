import React from 'react';
import ReactDom from 'react-dom';
import logo from './logo.svg';
import './App.css';

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

class GuestGreeting extends React.Component {

  constructor(props) {
    super(props);
    // this.handleLoginClick = this.handleLoginClick.bind(this);
    // this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {username:'',password:'',isLoggedIn: false};
  }
namehandler=(e)=>{
    e.preventDefault();
    // console.log(e.target.value)
    // const text=e.target.value;    
    this.setState({username:e.target.value})
    
}
passhandler=(e)=>{
    // console.log(e.target.value)
    e.preventDefault();
    this.setState({password:e.target.value})   
}

render(){
  return (
    <div>
                 
    <h1>LOGIN</h1>
    {/* status is {this.state.username} */}
      <form style={{color : 'red' }} >
       Username:<br></br> 
       <input type='text' placeholder='write name here' onChange={this.namehandler} />
       <br></br>
       Password:<br></br>  <input type='Password' placeholder='write password here' onChange={this.passhandler}/> 
       <br></br>   
      
       {/* <input type='Submit' placeholder='Login' />  */}
      </form>
    {/* <button onClick={this.loginclick}>login</button> */}
    </div>
  );
}}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

class LoginButton extends React.Component {
  constructor(props) {
    super(props);
    // this.handleLoginClick = this.handleLoginClick.bind(this);
    // this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }
  render(){
  return (
    <div> 
      <button onClick='this.check'>Login</button>
    </div>
  );
}
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    // this.handleLoginClick = this.handleLoginClick.bind(this);
    // this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    
    this.setState({isLoggedIn: true});

  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton  />;
    } else {
      button = <LoginButton />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}


export default  LoginControl ;
