import React, { Component } from 'react';
import Loader from './Components/Loader';
import Button from './Components/Button';
import SimpleForm from './Components/SimpleForm';
import DotNav from './Components/DotNav';
import Slider from './Components/Slider';
import './App.scss';

class App extends Component {
	constructor(props){
		super(props)

		this.state = {
			showLoader: false,
			enteredText: "",
			showText: false,
			clearVal: false,
			dotActive: 0
		}

		this.toggleLoader = this.toggleLoader.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.changeDot = this.changeDot.bind(this)
	}

	toggleLoader(e){
		e.preventDefault()
		this.setState({
			showLoader: !this.state.showLoader
		})
	}

	handleChange(e){
		this.setState({
			enteredText: e.target.value
		})
	}

	handleSubmit(e){
		e.preventDefault()
			this.setState({
				showText: !this.state.showText,
			})
	}

	changeDot(e, num){
		if(num !== this.state.dotActive){
			this.setState({
				dotActive: num
			})
		}
	}

	render(){
	  return (
	    <div className="app__container">
				<div className="app__header view-header">
					Hookit React Test Site
				</div>

				<div className="app__content">
					<div className="app__content--sec">
						<div className="content-box">
							<div className={this.state.showLoader ? `loader__container` : `loader__container hidden`}>
								<Loader />
							</div>
							<div className="btn__container">
								<Button
									buttonLabel={this.state.showLoader ? "Hide Loader" : "Show Loader"}
									handleClick={(e) => this.toggleLoader(e)}
								/>
							</div>
						</div>
						<div className="form__container content-box">
							<SimpleForm
								enteredInput={this.state.enteredText}
								showText={this.state.showText}
								handleClick={(e) => this.handleSubmit(e)}
								handleChange={(e) => this.handleChange(e)}
							/>
						</div>
					</div>
					<div className="app__content--sec app__content--sec--2">
						<div className="dot__container content-box">
							<DotNav
								dotActive={this.state.dotActive}
								changeDot={this.changeDot}
							/>
						</div>
						<div className=" slider__container content-box">
							<Slider />
						</div>
					</div>
		    </div>
			</div>
	  );
	}
}

export default App;
