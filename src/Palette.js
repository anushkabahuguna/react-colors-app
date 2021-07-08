import React,{Component} from 'react';
import './Palette.css';

class Palette extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
         }
    }
  render () {
    return (

      <div className="Palette">
          {/* Navbar goes here */}
          <div className="Palette-colors">
            {/* bunch of color boxes */}
          </div>
          {/* here comes the footer */}
       </div>
       
    )
    }

}

export default Palette;