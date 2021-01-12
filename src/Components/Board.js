import React from 'react';
//import '../App.css';
import LetterProposed from './LetterProposed'

class Board extends React.Component{
    constructor(props){
      super(props)
    }
  
    shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
  
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
  
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
  
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
  
      return array;
    }
  
    //On surveille l'état du bouton, le tableau ne doit se render que si le bouton a été cliqué
    shouldComponentUpdate(nextProps, nextState){
      if(nextProps.app.state.buttonClicked == false){
        return false
      }
      else{
        return true
      }
    }
  
    render(){
      const datas = this.shuffle(this.props.datas)
      return(
        <div>
          {datas.map((data, index) => 
            (this.props.lettersSelected.includes(data.id) && <LetterProposed id={data.id} data={data.persian} key={data.id} letterQueried={this.props.letterQueried} app={this.props.app} />)
          )}
        </div>
      )
    }
}

export default Board;