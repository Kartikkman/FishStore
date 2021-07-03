import React from "react";


const Header = ({tagline, age}) =>(

    <header className="top">
        <h1>Catch
            <span className="ofThe">
                <span className="of">of</span>
                <span className="the">The</span>
            </span>
            Day
        </h1>
        <h3 className="tagline">
            <span>{tagline} {age}</span>
        </h3>
    </header>

);


/*
class Header extends React.Component {

    render() {

        return (

            <header className="top">
                <h1>Catch
                    <span className="ofThe">
                        <span className="of">of</span>
                        <span className="the">The</span>
                    </span>
                    Day
                </h1>
                <h3 className="tagline">
                    <span>{this.props.tagline}</span>
                </h3>
            </header>

        );
    }
}
*/

export default Header;

/*
Uncommented React Component is made using Lambda Expresssion syntax , It shortens the syntax
We can use that when we only have one render function isnide our component   


*/