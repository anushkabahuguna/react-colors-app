import React,{Component} from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import './App.css';

class App extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
         }
    }
  render () {
    return (

      <div className="App">
        <Palette {...seedColors[4]}/>
       </div>
       
    )
    }

}

export default App;