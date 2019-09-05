import React,{Component} from 'react';
import App from "../App";
import Add_profile from "../Components/Add_Profile"; 
import {Provider} from 'react-redux';
import store from '../Store';
import Error from '../Error';
import {BrowserRouter, Route , Switch} from "react-router-dom";
class Router extends Component {
render(){
    return(
  <Provider store = {store}>
    <BrowserRouter>
  <Switch>
   <Route path="/" component={App} exact></Route>
   <Route path="/Add_Profile" component={Add_profile}></Route>
   <Route component={Error}/>
  </Switch>
  </BrowserRouter>
  </Provider>
    );
}
}
export default Router;