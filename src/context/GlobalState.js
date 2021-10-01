import React, {Component} from "react";
import AplicacionContext from "./AplicacionContext";

class GlobalState extends Component{
    state = {
        login: localStorage.getItem("login") || false,
        email: localStorage.getItem("email") || ""
    }
    
    login = (email) => {
        this.setState({
            login: true,
            email: email
        });
        localStorage.setItem("login", true);
        localStorage.setItem("email", email);

    }

    logout = () => {
        this.setState({
            login: false,
            email: ""
        });
        localStorage.removeItem("login");
        localStorage.removeItem("email");
    }

    render(){
        return(
            <AplicacionContext.Provider
                value={{
                    email: this.state.email,
                    login: this.state.login,
                    loginUsuario: this.login,
                    logoutUsuario: this.logout
                }}
            >

                {this.props.children}
            </AplicacionContext.Provider>
        )
    }


}

export default GlobalState;