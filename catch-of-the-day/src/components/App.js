import React from "react";
import Header from "./Header"
import Inventory from "./Inventory"
import Order from "./Order"

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

    render() {

        return (

            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Catch of The Day" age={69} cool={true} />
                </div>
                <Order />
                <Inventory addFish = {this.addFish} />
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