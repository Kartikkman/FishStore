import React from "react";
import Header from "./Header"
import Inventory from "./Inventory"
import Order from "./Order"
import sampleFishList from "../sample-fishes" ;
import Fish from "./Fish";

class App extends React.Component {

    state = {
        fishes: {},
        order: {}
    };

    addFish = (fish) => {
        
        // 1. Take a copy of the existing state 
            const fishes = {... this.state.fishes};
        // 2. Add our new fish to our fishes 
            fishes[`fish${Date.now()}`] = fish;
        // Set the enw fishses object to state 
            this.setState({fishes});

    };

    loadSampleFishes = (event) => {

        // Set the enw fishses object to state 
            this.setState( { fishes : sampleFishList});

    };

    addToOrder = (fish) => {
        
        // 1. Take a copy of the existing state 
            const order = {... this.state.order};
        // 2. Either add the order or update the quantity of the order 
            order[fish] = order[fish] + 1 || 1;
        // Set the enw fishses object to state 
            this.setState({order});

    };


    render() {

        return (

            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Catch of The Day" age={69} cool={true} />
                    <ul className="fishses">
                        {Object.keys(this.state.fishes).map( key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />)}

                    </ul>
                </div>
                <Order orders={this.state.order} fishes={this.state.fishes} />
                <Inventory addFish = {this.addFish} loadSampleFishes = {this.loadSampleFishes} />
            </div>
        );

    }


}

export default App;

/*
Props are just way of sending data from one component to another . 
It's like we used to send data to bulit in html tags like input , img . For Ex : 

    <input type = "text" /> 
    <img src="src.png" />
*/

/*
    States in React : 

    State is some data stored inside the component which is accesible to itself & its child componenets . 

    Methodology : 

        - Create a State varaible insidde the Component like this : 

            state = {

                fishes : {},
                orders : {}
            }

        - TO make the state Updatable , we need to create a method inside the Component , which can udpate its state . We will be 
            further calling this method from the Child Components to update state

            updateState = (event) =>{

                Create Copy of exisitng state , udpate the state 
                const stateCopy = {... state };
                stateCopy.name = "Kartiik";
                this.setState(stateCopy);
            }

        - TO make the state accesible to deep child components , we are going to pass down the method using props . Like : 
            <Inventory addFish = {this.addFish}>
            <AddFish addFish = {this.props.addFish}/>

            Then we can call this method from the child components successfully 


*/

/*
    Looping in React : 

            While JSX templating dosen't provide any sort of looping jor If-Else functionality , so we need to loop in through JS Objects on our own , 
            Above we havde done it using : Object.keys().map(key => )



*/