import React, { Component } from 'react';
import Loader from './Components/Loader';
import Button from './Components/Button';
import SimpleForm from './Components/SimpleForm';
import './App.scss';

class App extends Component {
	constructor(props){
		super(props)

		this.state = {
			showLoader: false,
			enteredText: "",
			showText: false,
			clearVal: false,
		}

		this.toggleLoader = this.toggleLoader.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
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

	render(){
	  return (
	    <div className="app__container">
				<div className="app__header view-header">
					Hookit React Test Site
				</div>

				<div className="app__content">
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
			</div>
	  );
	}
}

export default App;
