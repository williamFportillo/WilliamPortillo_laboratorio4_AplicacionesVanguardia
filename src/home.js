import React from 'react';
import Details from './details';
class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {message: 'Laboratorio 4'}
        this.changeState  =this.changeState.bind(this);
    }

    changeState(){
        this.setState({message: 'Aplicaciones de Vanguardia'});
    }
    render(){
        return<div>
          <h1>{this.state.message}</h1>
          <Details detailsTitle='Primer Ejercicio' detailValue='2'/>
           <button onClick={this.changeState}>CHANGE</button>
           </div>
    }
}

export default Home;