import React from 'react';
import '../App.css';

class LetterQuerried extends React.Component{
    constructor(props){
      super(props)
    }
  
    shouldComponentUpdate(nextProps, nextState){
      if(nextProps.app.state.buttonClicked == false){
        return false
      }
      else{
        return true
      }
    }
  
    render(){
      return(
        <p>{this.props.letterQueried}</p>
      )
    }
}

export default LetterQuerried;