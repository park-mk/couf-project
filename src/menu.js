import React, { Component } from 'react';

import './menu.css';

class Menu   extends Component {
  render() {
      console.log(this.props);
     return (
      <div> 

       <h1>{this.props.title}</h1>
      
          <Menup poster={this.props.poster}/>
      </div>
 
    );
  }
}


class  Menup   extends Component {
  render() {
     // console.log(this.props.poster);

     return (     
       <img src= {require(""+this.props.poster)}/>
     
    
    );
  }
}





export default Menu  ;
