import React, { Component } from 'react'

class Slider extends Component{
	constructor(props){
		super(props)

		this.state = {
			value: 0,
			fillX: "30px",
			thumbLeft: "-1px"
		}

		this.handleSliderChange = this.handleSliderChange.bind(this)
		this.setValue = this.setValue.bind(this)
	}

	setValue(e, val){
		this.handleSliderChange(e, val)
	}

	handleSliderChange(e, val){
		let thumbSize = 30;
		let trackSize = 300 - thumbSize
		let percent = val ? val/20 : e.target.value/20;
		let location = percent * trackSize

		let updatePx = (location + 5) + "px";
		let fillUpdate = (location + 30) + "px";

		if (percent === 0) {
			updatePx = 0 + "px"
		}

		this.setState({
			value: parseInt(val ? val : e.target.value),
			thumbLeft: updatePx,
			fillX: fillUpdate,
		})
	}

	render(){
		const { value, fillX, thumbLeft } = this.state

		return (
					<div>
						<div className="slider__value-display">Slider Value: {value}</div>
						<div className="range">
							<div className="range__container">
								<div className="range__overlay" id="fill" style={{ width: fillX }} >
								</div>
								<div className="range__track" id="track"></div>
								<div className="range__thumb" id="thumb" style={{ left: thumbLeft }}></div>
								<div className="range__value" id="value" style={{ left: thumbLeft }}>{value}</div>
									<input
						 			onChange={this.handleSliderChange}
									onTouchMove={this.handleSliderChange}
									className="range__tag"
									type="range"
									min="0"
									max="20"
									value={value}
									step="1"  />

								<div className="range__points">
									<div className="range__point"></div>
									<div className="range__point"></div>
									<div className="range__point"></div>
									<div className="range__point"></div>
									<div className="range__point range__point--1"></div>
								</div>
							</div>

								<div className="range__labels">
									<div className="range__label range__space p1" onClick={(e) => this.setValue(e, 1)}>1</div>
									<div className="range__label p1" onClick={(e) => this.setValue(e, 5)}>5</div>
									<div className="range__label p1" onClick={(e) => this.setValue(e, 10)}>10</div>
									<div className="range__label p1" onClick={(e) => this.setValue(e, 15)}>15</div>
									<div className="range__label range__space--1 p1" onClick={(e) => this.setValue(e, 20)}>20</div>
								</div>
						</div>
					</div>
				)
		}
}

export default Slider
