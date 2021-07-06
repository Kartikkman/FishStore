import React, { Fragment } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component{

    myInput = React.createRef();

    constructor(){

        super();
        // this.goToStore = this.goToStore.bind(this);
        console.log("We are going to create a component !! ");
    }

    render(){
        //return <p>I am the store Picker!</p>
        //return React.createElement('p',{ className: 'hey'}, 'I am the store Picker!')
        return (
        <Fragment>
        <form  className="store-selector" onSubmit={this.goToStore}>
            { /* Some commeny in JSX */ }
            <h2>Plese Enter a Store</h2>
            <button onClick={this.handleClick} >Click me!</button>
            <input type="text" ref={this.myInput}  required palceholder="Store Name" defaultValue={getFunName()} />
            <button type="submit">Visit Sore </button>
        </form>
        </Fragment>
        )
    }

    handleClick(){
        alert(" Hey ,you have triggered on handle Click function ");
    }

    goToStore = (event) => {

        // 1.Stop the from from submitting
            event.preventDefault();
        //2. Get the Text from the Input 
            const storeName = this.myInput.current.value;
        //3. Change the page to /store/whatever-store-isentered
            this.props.history.push(`/store/${storeName}`);
    };

}


export default StorePicker;

// We can't return m ore than one sibling from render fucntion normally ( JSX syntax ) 
// To create siblings inside the react component , we need to use Fragment Container which lets us add sibling components
// We can't put comments on top of element ( in JSX ) 
//  CSS class property for html elements in React is reffered by "className" instead of "class"


/*

To access the value of the DOM in React , there are two ways : 
    1.We can touch the DOM & get the value out of it ( Not preffered way ) 
    2. Using States 


    We can use Refs , by Defining The RefTag on html element & binding it to React COmponent CLass variable , Like this : 
         <input type="text" ref={this.myInput} >
        
    Then we need to make a class level variable 
        myInput = React.createRef();

    Then use this variable inside the Component method ( Method should be bound to the Parent Class )  , Like : 

        There are two ways of Binding the method to the React Component 

        1.Storing the Method as a Variable ( Lambda Expressions ) 

            someMethod = (event) => {   
                this.myInput.current.value();
            }
        
        2.Binding the Method to the Class 
            this.goToStore = this.goToStore.bind(this);

*/