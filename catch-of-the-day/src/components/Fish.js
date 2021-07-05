import React from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../helpers";

class Fish extends React.Component {

    static propTypes = {
        details : PropTypes.shape({
            name: PropTypes.string,
            image: PropTypes.string,
            desc: PropTypes.string,
            price: PropTypes.number,
            status: PropTypes.string,
        })
    }


    addFishOrder = (event) => {

        return this.props.addToOrder(this.props.index);

    };


    render() {

        const { image, name, price, desc, status } = this.props.details;
        const isAvailable = status === 'available';
        return (

            <li className="menu-fish">
                <img src={image} alt={name} />
                <h3 className="fish-name">{name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button disabled={!isAvailable} onClick={this.addFishOrder}>{isAvailable ? 'Add to Cart' : 'Sold Out'}</button>
            </li>


        );

    }
}

export default Fish;