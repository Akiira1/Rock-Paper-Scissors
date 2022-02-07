import React from 'react'
import rock from '../img/icon-rock.svg'
import paper from '../img/icon-paper.svg'
import scissors from '../img/icon-scissors.svg'
import Piece from "./piece"

class InGame extends React.Component {

    constructor(props) {
        super(props)
        this.state = { choix: "", choixHouse: "", win: "" }
    }

    house = Math.floor(Math.random() * 3)

    letChoice = (choice) => {
        this.setState({ choix: choice })
    }

    reload = () => {
        this.setState({ choix: '', choixHouse: '' })
        this.house = Math.floor(Math.random() * 3)
    }


    result = () => {
        let res = { ...this.state }
        if (res.choix === "rock" && res.choixHouse === "scissors") {
            res.win = "win"
            this.props.majScore(1)
            this.setState(res)
        } else if (res.choix === "rock" && res.choixHouse === "paper") {
            res.win = "lose"
            this.props.majScore(-1)
            this.setState(res)
        } else if (res.choix === "scissors" && res.choixHouse === "paper") {
            res.win = "win"
            this.props.majScore(1)
            this.setState(res)
        } else if (res.choix === "scissors" && res.choixHouse === "rock") {
            res.win = "lose"
            this.props.majScore(-1)
            this.setState(res)
        } else if (res.choix === "paper" && res.choixHouse === "rock") {
            res.win = "win"
            this.props.majScore(1)
            this.setState(res)
        } else if (res.choix === "paper" && res.choixHouse === "scissors") {
            res.win = "lose"
            this.props.majScore(-1)
            this.setState(res)
        } else {
            res.win = "draw"
            this.setState(res)
            this.props.majScore(0)
        }
        console.log(res);
        this.reload()
    }



    render() {
        let imgHouse
        let borderColor
        let id
        switch (this.house) {
            case 0:
                this.state.choixHouse = 'paper'
                imgHouse = paper
                borderColor = '#EBA217'
                id = 'piecePaper'
                break;
            case 1:
                this.state.choixHouse = 'rock'
                imgHouse = rock
                borderColor = '#4867F5'
                id = 'pieceRock'
                break;
            case 2:
                this.state.choixHouse = 'scissors'
                imgHouse = scissors
                borderColor = '#DF3B58'
                id = 'pieceScissors'
                break;
        }



        return (
            <div className="game">
                {console.log(this.state.choixHouse)}
                {/* if no choice start */}
                {this.state.choix == '' &&
                    <div id="plateau" className='gameDiv'>
                        <h2 className="text-center text-white mb-3">Choose a Weapon </h2>
                        <div className="  d-flex justify-content-between ">
                            <div className=" ">
                                <Piece
                                    pieceSource={paper}
                                    id='piecePaper'
                                    border={'#ec9e0e'}
                                    onClick={this.letChoice}
                                    name='paper'
                                />
                            </div>

                            <div>
                                <Piece
                                    pieceSource={rock}
                                    id='pieceRock'
                                    border='#4865f4'
                                    onClick={this.letChoice}
                                    name='rock'
                                />
                            </div>

                        </div>

                        <div>
                            <div className=" d-flex justify-content-center mt-5">
                                <Piece
                                    pieceSource={scissors}
                                    id='pieceScissors'
                                    border='#dc2e4e'
                                    onClick={this.letChoice}
                                    name="scissors"
                                />
                            </div>
                        </div>
                    </div>
                }
                {/* if no choice end */}

                {/* if paper start */}
                {this.state.choix == 'paper' &&
                    <div id="plateau2">
                        <div >
                            <div className="d-flex justify-content-between">
                                <div className=" ">
                                    <h3 className="text-center">You</h3>
                                    <Piece
                                        pieceSource={paper}
                                        id='piecePaper'
                                        border='#ec9e0e'
                                        onClick={this.letChoice}
                                        name='paper'
                                    />
                                </div>

                                <div>
                                    <h3 className="text-center">house</h3>
                                    <Piece
                                        pieceSource={imgHouse}
                                        border={borderColor}
                                        id={id}
                                    />
                                </div>
                            </div>

                            <div className="pt-5 mt-5 resultLg d-flex flex-column justify-content-center">
                                {this.state.choix == 'paper' && this.state.choixHouse == 'rock' &&
                                    <h1 className='text-center pt-5'>Player Win</h1>
                                }
                                {this.state.choix == 'paper' && this.state.choixHouse == 'scissors' &&
                                    <h1 className='text-center pt-5'>House Win</h1>
                                }
                                {this.state.choix == 'paper' && this.state.choixHouse == 'paper' &&
                                    <h1 className='text-center pt-5'>Draw</h1>
                                }
                                <button onClick={this.result} className="btn btn-dark">Play again</button>
                            </div>

                        </div>
                    </div>
                }
                {/* if paper end */}
                {/* if rock start */}
                {this.state.choix == 'rock' &&
                    <div id="plateau2">
                        <div >
                            <div className="d-flex justify-content-between">
                            <div>
                                <h3 className="text-center">You</h3>
                                <Piece
                                    pieceSource={rock}
                                    id='pieceRock'
                                    border='#4865f4'
                                    onClick={this.letChoice}
                                    name='rock'
                                />
                            </div>


                            <div>
                                <h3 className="text-center">house</h3>
                                <Piece
                                    pieceSource={imgHouse}
                                    border={borderColor}
                                    id={id}
                                />
                            </div>
                            </div>

                            <div className="pt-5 mt-5 resultLg d-flex flex-column justify-content-center">
                                {this.state.choix == 'rock' && this.state.choixHouse == 'scissors' &&
                                    <h1 className='text-center pt-5'>Player Win</h1>
                                }
                                {this.state.choix == 'rock' && this.state.choixHouse == 'paper' &&
                                    <h1 className='text-center pt-5'>House Win</h1>
                                }
                                {this.state.choix == 'rock' && this.state.choixHouse == 'rock' &&
                                    <h1 className='text-center pt-5'>Draw</h1>
                                }
                                <button onClick={this.result} className="btn btn-dark">Play again</button>
                            </div>

                        </div>
                    </div>
                }
                {/* if rock end */}

                {/* if scissors start */}
                {this.state.choix == 'scissors' &&
                    <div id="plateau2">
                        <div>
                            <div className="d-flex justify-content-between">
                            <div>
                                <h3 className="text-center ">You</h3>
                                <Piece
                                    pieceSource={scissors}
                                    id='pieceScissors'
                                    border='#dc2e4e'
                                    onClick={this.letChoice}
                                    name='scissors'
                                />
                            </div>


                            <div>
                                <h3 className="text-center">house</h3>
                                <Piece
                                    pieceSource={imgHouse}
                                    border={borderColor}
                                    id={id}
                                />
                            </div>
                            </div>

                            <div className="pt-5 mt-5 resultLg  d-flex flex-column justify-content-center ">
                                {this.state.choix == 'scissors' && this.state.choixHouse == 'paper' &&
                                    <h1 className='text-center pt-5'>Player Win</h1>
                                }
                                {this.state.choix == 'scissors' && this.state.choixHouse == 'rock' &&
                                    <h1 className='text-center pt-5'>House Win</h1>
                                }
                                {this.state.choix == 'scissors' && this.state.choixHouse == 'scissors' &&
                                    <h1 className='text-center pt-5'>Draw</h1>
                                }
                                <button onClick={this.result} className="btn btn-dark">Play again</button>
                            </div>

                        </div>
                    </div>
                }
                {/* if scissors end */}
            </div>
        )
    }
}

export default InGame