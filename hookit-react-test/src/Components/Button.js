import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Button extends Component {

  render() {
  	const { btnClass, bgColor, buttonLabel, handleClick, href, handleKeyPress } = this.props;
    return (
      <div className={btnClass ? `btn ${btnClass}` : `btn`} onClick={handleClick} onKeyPress={handleKeyPress} >
				{href ? <Link to={href}><span className={bgColor ? `btn-label ${ bgColor }` : "btn-label"} >{ buttonLabel }</span></Link>
					: <span className={bgColor ? `btn-label ${ bgColor }` : "btn-label"} >{ buttonLabel }</span>
				}
      </div>
    );
  }
}

export default Button;
