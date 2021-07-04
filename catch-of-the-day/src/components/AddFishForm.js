import React from "react";

class AddFishForm extends React.Component{

    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    render() {
        return(
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" ref={this.nameRef} placeholder="Name"/>
                <input name="price" ref={this.priceRef} placeholder="Price"/>
                <select name="status" ref={this.statusRef} >
                    <option value="avaiable">Fresh!</option>
                    <option value="unavaiable">Sold Out!</option>
                </select>
                <textarea name="desc" ref={this.descRef} placeholder="Desc"/>
                <input name="image" ref={this.imageRef} type="text" placeholder="Iamge"/>
                <button type="submit">+ Add Fish</button>
            </form>
        );

    }

    createFish = (event) => {

        // 1. Stop Form from submitting
            event.preventDefault();
        // Creating the Fish Data 
            const fish = { 
                name : this.nameRef.current.value,       
                price : parseFloat(this.priceRef.current.value),
                status : this.statusRef.current.value,
                desc : this.descRef.current.value,
                image : this.imageRef.current.value
            }

            this.props.addFish(fish);
        
        // Clearing the Current Form 
            event.currentTarget.reset();
    }
}



export default AddFishForm;