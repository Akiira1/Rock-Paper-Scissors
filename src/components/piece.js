import React from 'react';

class Piece extends React.Component {
    constructor(props) {
        super(props);
    }
    click = () => {
        this.props.onClick(this.props.name)
    }
    render() {
        return (
            <div onClick={this.click} className="piece justify-content-center" style={{ border: '20px solid' + this.props.border }}
                id={this.props.id}>
                <img className="imagePiece" src={this.props.pieceSource} alt="" />
            </div>
        );
    }
}

export default Piece;