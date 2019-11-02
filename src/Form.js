import React, { Component } from "react"

import Welcome from "./WelcomePage";

class Form extends Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            password: "",
            isLogedIn: false
        }
    }

    handleOnchange = (evt) => {
        evt.preventDefault()
        this.setState({ [evt.target.name]: evt.target.value })
    }
    handleLogin = (evt) => {
        evt.preventDefault();
        let { userName, password } = this.state;
        if (!userName || !password) {
            alert("Enter user name or password")
            return;
        }
        if (userName === "Admin" && password === "Admin") {
            this.setState({ isLogedIn: true })
        }
        else {
            alert("Invalid username or password!!!")
        }
    }

    handleLogout = () => {
        this.setState({ isLogedIn: false })
    }

    render() {
        const { isLogedIn } = this.state
        return (
            isLogedIn ? <Welcome handleLogout={this.handleLogout}/> :
                <form onSubmit={this.handleLogin}>
                    <input onChange={this.handleOnchange} placeholder="UserName" name="userName" />
                    <input onChange={this.handleOnchange} type="password" placeholder="Enter password" name="password" />
                    <button type="submit">Login</button>
                </form>
        )
    }
}

export default Form;
