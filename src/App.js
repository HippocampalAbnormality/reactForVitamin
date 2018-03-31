import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import TopHead from './component/TopHead/TopHead'
import Nav from './component/Nav/Nav'
import Home from './component/Home/Home'
import Special from './component/Special/Special'
import Found from './component/Found/Found'
import Mine from './component/Mine/Mine'
import Msg from './component/Msg/Msg'

class App extends Component {

  componentDidMount() {
    
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <TopHead />
  		    <Route exact path='/' component={ Home }></Route>        
  		    <Route path='/special' component={ Special }></Route>        
  		    <Route path='/found' component={ Found }></Route>        
  		    <Route path='/msg' component={ Msg }></Route>        
  		    <Route path='/mine' component={ Mine }></Route>        
          <Nav />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
