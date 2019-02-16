import React, { Component } from 'react';
import './App.css';
import Menu from './menu'; 
import Home from './routes/home.js'
import Area1 from './routes/area1.js'
import Area2 from './routes/area2.js'
import Area3 from './routes/area3.js'
import Area4 from './routes/area4.js'
import MenuBlock from './menublock/menublock.js'
import { BrowserRouter, Route, Link ,Router} from 'react-router-dom';



const menus =[
 
   {   title:"tArea1",poster:'./imge/2.png'},
   {   title:"tArea2",poster:'./imge/1.png'},
   {   title:"tArea3",poster:'./imge/2.png'},
   {   title:"tArea4",poster:'./imge/2.png'},
   {   title:"SEOUL",poster:'./imge/2.png'}
   
  
]


class App extends Component {
  render() { 
      return(  
       //  <div className="App">
        <BrowserRouter>
        <div>
        <MenuBlock/>
         <Route  exact path="/"  component={ Home} />
        <Route   path="/area1"  component={Area1 } />
        <Route   path="/area2"  component={Area2 } />
        <Route   path="/area3"  component={Area3 } />
        <Route   path="/area4"  component={Area4 } />
        </div>
        </BrowserRouter>
        
        
     

      //  {  menus.map((menup,index)=>{
      // return   <Menu title={menup.title}  poster={menup.poster} key={index} />
      //  })}
    // </div>
    );
 }
}


export default App;
