import React from 'react';
import '../App.css';

class LetterProposed extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        bgColor: 'blue'
      }
    }
  
    handlerClick(e){
      if(e.target.id == this.props.letterQueried){
        this.setState({
          bgColor: 'green'
        })
        this.props.app.handleWon()
        console.log("gagné")
      }
      else if(e.target.id != this.props.letterQueried){
        this.setState({
          bgColor: 'red'
        })
        console.log("perdu")
      }
    }
  
    componentWillUnmount(){
      this.setState({
        bgColor: 'blue'
      });
    }

    componentDidUpdate(prevProps) {
      if(this.props.app.state.buttonClicked !== prevProps.app.state.buttonClicked){
        this.setState({
          bgColor: 'blue'
        });
      }
      
    }
  
    render(){
      return(
      <button id={this.props.id} onClick={this.handlerClick.bind(this)} style={{backgroundColor:this.state.bgColor}}>{this.props.data}</button>
      )
    }
}

export default LetterProposed;