import React, { Fragment } from 'react';

class StorePicker extends React.Component{

    render(){
        //return <p>I am the store Picker!</p>
        //return React.createElement('p',{ className: 'hey'}, 'I am the store Picker!')
        return (
        <Fragment>
        <form  className="store-selector">
            { /* Some commeny in JSX */ }
            <h2>Plese Enter a Store</h2>
            <input type="text" required palceholder="Store Name" />
            <button type="submit">Visit Sore </button>
        </form>
        <p> This is some sibling element inside JSX component </p>
        </Fragment>
        )
    }


}

export default StorePicker;

// We can't return m ore than one sibling from render fucntion normally ( JSX syntax ) 
// To create siblings inside the react component , we need to use Fragment Container which lets us add sibling components
// We can't put comments on top of element ( in JSX ) 
//  CSS class property for html elements in React is reffered by "className" instead of "class"
