import React from 'react';
import '../App.css';

class LetterProposed extends React.Component{
	
	constructor(props){
		super(props)
		
		this.state = {
			clicked: false
		}
	}
  
  handlerClick(e){
  
      //on réinitialise l'état buttonClicked a false pour pas que le component principal FindAnswer se re-render lors du clic sur une lettre proposée
      //this.props.app.state.buttonClicked = false
  
	  this.setState({clicked: true})
  
      if(e.target.id == this.props.letterQueried){
        this.props.app.handleWon()
        console.log("gagné")
      }
      else if(e.target.id != this.props.letterQueried){
        console.log("perdu")
      }
      //console.log(this.props.letterQueried)
    }
  
    /*shouldComponentUpdate(nextProps){
      if(nextProps.app.state.buttonClicked == true){
        return false
      }
      else{
        return true
      }
    }*/
  
  render(){
      return(
      <button id={this.props.id} 
			  onClick={this.handlerClick.bind(this)} 
        style={this.state.clicked ? this.props.letterQueried === this.props.id ? {backgroundColor: 'green'} : {backgroundColor: 'red'} : {backgroundColor: "grey"}}>
		{this.props.data}
	  </button>
      )
    }
}

export default LetterProposed;