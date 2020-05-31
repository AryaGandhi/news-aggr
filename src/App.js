import React from 'react';
import World from './component/World';
import Home from './component/Home';
import Economics from './component/Economics';
import Education from './component/Education';
import Astrology from './component/Astrology';
import Business from './component/Business';
import Entertainment2 from './component/Entertainment2';
import City from './component/City';
import Corona from './component/Corona';
import Lifestyle from './component/Lifestyle';
import Sports from './component/Sports';
import Travel from './component/Travel';
import Technology from './component/Technology';
import Menu from './component/Menu';
import Covid from './component/Covid';
import {BrowserRouter as Router, HashRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
    <Router>
    <Menu />
    
          <div>
           
            <switch>
            <Route exact path='/' component={Home} />
            <Route path='/technology' component={Technology} />
            <Route path='/travel' component={Travel} />
            <Route path='/corona' component={Corona} />
            <Route path='/city' component={City} />
            <Route Path='/entertainment2' component={Entertainment2} />
            <Route path='/education' component={Education} />
            <Route path='/world' component={World} />
            <Route path='/economics' component={Economics} />
            <Route path='/lifestyle' component={Lifestyle} />
            <Route path='/sports' component={Sports} />
            <Route path='/astrology' component={Astrology} />
            <Route path='/business' component={Business} />
            <Route path='/covid' component={Covid} />

            </switch>
            </div>
      
            </Router>  
     
    </div>
  );
}

export default App;