import React from 'react';
//import '../App.css';
import Board from './Board';
import LetterQuerried from './LetterQueried';
import ButtonNext from './ButtonNext';
import datas from '../datas';

class FindAnswer extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        guesses: 0,
        won: false,
        buttonClicked: false
      }
    }
  
    getId(datas){
      const tabIdLetters = []
      datas.map((data, index) =>
        (tabIdLetters.push(data.id))
      )
      return tabIdLetters
    }
  
    
    getRandom(arr, n) {
      var result = new Array(n),
          len = arr.length,
          taken = new Array(len);
      if (n > len)
          throw new RangeError("getRandom: more elements taken than available");
  
      while (n--) {
          var x = Math.floor(Math.random() * len);
          result[n] = arr[x in taken ? taken[x] : x];
          taken[x] = --len in taken ? taken[len] : len;
      }
  
      return result;
    }
  
    getOneRandom(arr) {
      var result,
          len = arr.length;
          var x = Math.floor(Math.random() * len);
          result = arr[x]
      return result;
    }
  
    //handleWon sans le bouton =============================
    /*handleWon(){
      const newGuesses = this.state.guesses + 1
      this.setState({
        guesses: newGuesses,
        won: true
      })
    }*/
  
    handleWon(){
      this.setState({
        won: true
      })
    }
  
    handleButtonNext(){
      const newGuesses = this.state.guesses + 1
      this.setState({ 
        guesses: newGuesses,
        won: false,
        buttonClicked: true
      });
    }
  
    render(){
      const lettersSelected = this.getRandom(this.getId(this.props.datas), 4) //les 4 lettres affichées
      const letterQueried = this.getOneRandom(lettersSelected) //on en sélectionne une qui sera celle demandée
  
      //app={this} à garder si on gère le style à partir de l'état du composant app, sinon à supprimer
      //LE GARDER DANS ButtonNext
  
      return (
        <div className="App">
          <Board datas={datas} className="board" lettersSelected={lettersSelected} letterQueried={letterQueried} app={this} />
          <LetterQuerried lettersSelected={lettersSelected} letterQueried={letterQueried} app={this} />
          {this.state.won && <ButtonNext app={this} style={{display:this.state.visible}} />}
        </div>
      )
    }
  }
  
  export default FindAnswer;