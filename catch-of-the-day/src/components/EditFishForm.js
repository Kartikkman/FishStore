import React from "react";
import { formatPrice } from "../helpers";

class EditFishForm extends React.Component {


    render() {

        return (
            <div className="fish-edit">
                <input type="text" name="price" onChange={this.handleOnChange} value={this.props.fish.price} />
                <input type="text" name="name" onChange={this.handleOnChange} value={this.props.fish.name} />
                <select type="text" name="status" onChange={this.handleOnChange} value={this.props.fish.status} >
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea type="text" name="desc" onChange={this.handleOnChange} value={this.props.fish.desc} />
                <input type="text" name="image" onChange={this.handleOnChange} value={this.props.fish.image} />
                <button onClick={() => this.props.deleteFish(this.props.id)} >Remove Fish</button>
            </div>
        );

    }

    handleOnChange = (event) => {

        console.log(event);
        const fish = {...this.props.fish,
        [event.target.name] : event.target.value
        };
        this.props.updateFish(this.props.id, fish);


    };




}



export default EditFishForm;