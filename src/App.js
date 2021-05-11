import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
      name: 'Cristiano da Silva Nascimento',
      counter: 0
    };

  handlePClick = () => {
    this.setState({name: 'Cristiano Nascimento'});
  }

  handleAClick = (event) => {
    event.preventDefault();
    const {counter} = this.state;
    this.setState({counter: counter + 1});
  }

  render() {
    
    /*
    //Forma primariação
    const name = this.state.name
    */

    //Forma desestruturada (mais usada)
    const { name, counter }= this.state;
    const msg = `Olá mundo! ${counter}`;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {msg}
          </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {name}
          </a>
        </header>
      </div>
    );
  }
}



/* 

function App() {

}
 */
export default App;
