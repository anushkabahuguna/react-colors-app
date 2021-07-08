import React,{Component} from 'react';
import './ColorBox.css';

class ColorBox extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
         }
    }
  render () {
      let styleObj  = {
          background:this.props.background
      }
    return (

      <div className="ColorBox" style={styleObj}>
          <span>{this.props.name}</span>
          <span>see More colors</span>
       </div>
       
    )
    }

}

export default ColorBox;