import React from "react";
import { BrowserRouter,Route,Switch } from "react-router-dom";
import StorePicker from "./StorePicker";
import App from "./App";

const Router = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={StorePicker}/>
            <Route path="/store/:storeId" component={App}/>


        </Switch>
    </BrowserRouter>



)

export default Router;


/*

Using router in react is very simple , Router is also a component like others 
We just need to make it a default component for our Application in index.js 

After that when application loads , call goes to Router component first then We can load other components based upon some sort of condition . 


*/