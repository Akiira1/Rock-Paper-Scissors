import React from 'react';

class Header extends React.Component {

    constructor(props) {
        super(props);
        
    }


    render() {
        return (
            <div className="header d-flex justify-content-between">
                <div>
                    <h2>ROCK</h2>
                    <h2>PAPER</h2>
                    <h2>SCISSORS</h2>
                </div>
                <div className="score d-flex flex-column ">
                    <p>SCORE</p>
                    <h2>{this.props.score}</h2>
                </div>
            </div>
        );
    }
};

export default Header;

