import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
class Menu extends Component{
	render(){

		return(
      <div>
    <br></br><h1 style={{ textAlign:'center', color:'red', fontWeight:'bold', fontSize:"55px"}}>AuthentiNews</h1><br></br>
    
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
      <a className="navbar-brand" href="#">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvEWv3SUbwV-FAmIlEVD4Sbc3wmrNxbXekWsgoLDDCzYdoM9im&usqp=CAU" width ="80" className="d-inline-block align-top" alt="">
          </img>
            
       </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="nav nav-pills nav-fill">
      
      <li className="nav-item">
        <a className="nav-link"> <Link className='active' exact to='/'>Home</Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link"><Link to='/corona'>Corona</Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link"><Link to='/economics'>Economics</Link></a>
      </li>
       <li className="nav-item">
        <a className="nav-link"><Link to='/world'>World</Link></a>
      </li>
       <li className="nav-item">
        <a className="nav-link "><Link to='/travel'>Travel</Link></a>
      </li>
       <li className="nav-item">
        <a className="nav-link"><Link to='/sports'>Sports</Link></a>
      </li>
       <li className="nav-item">
        <a className="nav-link"><Link to='/city'>City</Link></a>
      </li>
       <li className="nav-item">
        <a className="nav-link"><Link to='/astrology'>Astrology</Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link"><Link to='/lifestyle'>LifeStyle</Link></a>
      </li>
       <li className="nav-item">
        <a className="nav-link"><Link to='/business'>Business</Link></a>
      </li>
       <li className="nav-item">
        <a className="nav-link" ><Link to='/entertainment2'>Entertainment</Link></a>
      </li>
       <li className="nav-item">
        <a className="nav-link"><Link to='/education'>Education</Link></a>
      </li>
       <li className="nav-item">
        <a className="nav-link" ><Link to='/technology'>Technology</Link></a>
        </li>
      
       <li className="list-group-item list-group-item-danger">
      
      <a className="nav-link" ><Link to='/covid'> <div className='text' >Covid-19 Live Updates</div></Link></a>
     
      </li>
     
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTU9eW1WWcgwTvevRob4WYx7ngejSJEJUm16pTRlY1jBhO2fws-&usqp=CAU" width ="80" className="d-inline-block align-top" alt=""></img>

    </ul>
  </div>
  </nav>
  </div>
    )
    
  }

}
export default Menu;