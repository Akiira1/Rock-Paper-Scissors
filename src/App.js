import React from 'react';
import Header from './components/header'
import Game from './components/inGame'
import Footer from './components/footer'

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {score : 0}
  }


  scoreUpdate = (param) => {
    const calcul = this.state.score + param
    this.setState({score: calcul})
  }

  render() {
    return (
      <div className="App">

        <Header 
          score= {this.state.score}
        />

        <Game 
        majScore= {this.scoreUpdate}
        />
        
        <Footer />
      </div>
    )
  }
}

export default App;
