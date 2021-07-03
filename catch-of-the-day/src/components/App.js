import React from "react";
import Header from "./Header"
import Inventory from "./Inventory"
import Order from "./Order"

class App extends React.Component {

    render() {

        return (

            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Catch of The Day" age={69} cool={true} />
                </div>
                <Inventory />
                <Order />
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