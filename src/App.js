import { Component } from 'react'
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

class App extends Component{
  render(){
    return (
      <div className="App">
        <Greet />
        <Greet name="David" heroname="Batman">
          <p>Leader of Gotham</p>
          <p>Find him @<a href="#">Batman Towers</a></p>
        </Greet>
        <Greet name="Diana" heroname="Wonder woman" />
        <Greet name="Bruce" heroname="Arrow" />
        <Welcome name="Bruce" />
        <Welcome name="Diana" />
        <Hello />
      </div>
    );
  }
}

export default App;
