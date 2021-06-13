import React from 'react'
import { Button } from '@material-ui/core';
import './Start.css'

class StartPage extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleLogin() {
        alert("Hallo Welt!")
    }

    handleRegister() {

    }

    render() {
        return (
            <div className="startPage">
                <img src="https://i.imgur.com/uqZ1h1V.png" /><br />
                <Button variant="contained" onClick={this.handleLogin} disableElevation>
                    Login
                </Button><br /><br />
                <Button variant="contained" onClick={this.handleRegister}>
                    Register
                </Button>
            </div>
        );
    }

}

export default StartPage