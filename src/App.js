import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ShopComponent from './pages/Shop/ShopComponent';
import Header from './components/Header/HeaderComponent';
import SignInSignUp from './pages/SignInSignUp/SignInSignUpComponent'


import './App.css';
import {auth} from './firebase/firebase.utils';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

class App extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             currentUser:null
        }
    }
    
    unSubscribeFromAuth = null;

    componentDidMount(){
        this.unSubscribeFromAuth = auth.onAuthStateChanged(user=>{this.setState({currentUser:user})})
    }

    componentWillUnmount(){ 
        this.unSubscribeFromAuth();
    }
      
    render(){
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={ShopComponent} />
                <Route path="/signIn" component={SignInSignUp} />
                </Switch>
            </div>
          );

    }
  
}

export default App;
