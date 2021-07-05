import React from "react";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";

class Inventory extends React.Component{

    render()
    {
        const fishesList = Object.keys(this.props.fishes);
        console.log(fishesList);

        return (
         <div className="Inventory">
            <h2>Inventory</h2>
            <AddFishForm addFish={this.props.addFish} />
            <button onClick={this.props.loadSampleFishes}>Load Sample Fishes </button>
            {fishesList.map(this.renderEditFishForms)}
        </div>
        );

    }

    renderEditFishForms = (key) => {

        console.log(key);
        return <EditFishForm key={key} fish={this.props.fishes[key]} id={key} updateFish={this.props.updateFish} deleteFish={this.props.deleteFish} />


    };


}

export default Inventory;