import React,{Component} from 'react';
import ColorBox from './ColorBox';
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
            {this.props.colors.map((color,index)=>(
                <ColorBox key={index} background={color.color} name={color.name}/>
            ))}
          </div>
          {/* here comes the footer */}
       </div>
       
    )
    }

}

export default Palette;