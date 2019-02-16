 import React from 'react';
 import './menublock.css';


 import {Link} from 'react-router-dom';
const MenuBlock =() => {
	return (
<div  className='menublock'>
       <Link to='/area1' className='item'>AREA1</Link>
       <Link to='/area2' className='item'>AREA2</Link>
       <Link to='/area3' className='item'>AREA3</Link>
       <Link to='/area4' className='item'>AREA4</Link>

 </div>
		);  
	};
	export default MenuBlock;