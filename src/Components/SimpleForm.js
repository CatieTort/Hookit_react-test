import React, { Component } from 'react'
import FormInput from './FormInput';
import Button from './Button';

class SimpleForm extends Component {

	render(){
		return (
			<form className="sample__form">
				<div className="sample__form--output p1"></div>
				<FormInput
					formLabel={"Enter your name"}
				/>
				<Button
					buttonLabel={"Submit"}
				/>
			</form>
		)
	}
}

export default SimpleForm
