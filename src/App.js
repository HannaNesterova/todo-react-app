
import { Component } from 'react';
import './App.css';
import { Moon } from './Moon';
import picture from './image/02.jpeg';

class App extends Component {

  render(){
  return (
    <div>
      <img src={picture} alt='pic' className={'picture'}/>
      <Moon />
    </div>
  );
}
}

export default App;
