import React, { Component } from 'react';
import FormInput from '../FormInput/FormInputComponent';

class SignInComponent extends Component {

    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    handleChange=(e)=>{
        const{name,value}=e;
        this.setState({[name]:value});
    }
    
    handleSubmit=(e)=>{
        e.preventDefault();
    }
    render() {
        
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>sign in with username and password</span> 
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" handleChange={this.handleChange} label="email"/>
                    <FormInput type="password" handleChange={this.handleChange} label="password"/>
                    <input type="submit" value="Sign In" />

                </form>               
            </div>
        );
    }
}

export default SignInComponent;