import React from 'react'

const DotNav = (props) => {
	return(
		<div>
			<div className="dot__display-value">Dot Value: {props.dotActive}</div>
			<div className="dot-nav">
					<div className={props.dotActive === 0 ? "dot active" : "dot"} onClick={(e) => props.changeDot(e, 0)}></div>
					<div className={props.dotActive === 1 ? "dot active" : "dot"} onClick={(e) => props.changeDot(e, 1)}></div>
					<div className={props.dotActive === 2 ? "dot active" : "dot"} onClick={(e) => props.changeDot(e, 2)}></div>
					<div className={props.dotActive === 3 ? "dot active" : "dot"} onClick={(e) => props.changeDot(e, 3)}></div>
					<div className={props.dotActive === 4 ? "dot active" : "dot"} onClick={(e) => props.changeDot(e, 4)}></div>
				</div>
		</div>
	)
}

export default DotNav
