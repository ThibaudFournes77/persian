import React from 'react';
import '../App.css';

class ButtonNext extends React.Component{

    constructor(props){
      super(props)
      this.state = {
        visible: 'block'
      }
    }
  
    handlerClick(){
      //Faire ça uniquement si on a gagné !
      //Afficher le bouton quand on gagne MAIS utiliser quand même le state (on en aura besoin pour la suite)
      this.props.app.handleButtonNext()
    }
  
    //on remets buttonClicked à false juste avant la disparition du bouton "suivant" et donc juste avant la nouvelle donne
    componentWillUnmount(){
      this.props.app.setState({buttonClicked: false})
    }
  
    render(){
      return(
        <button onClick={this.handlerClick.bind(this)}>Suivant</button>
      )
    }
}

export default ButtonNext;