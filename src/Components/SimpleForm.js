import React from 'react'
import FormInput from './FormInput';
import Button from './Button';

const SimpleForm = (props) => {
		return (
			<form className="sample__form">
				<div className={props.showText ? `sample__form--output p1` :`sample__form--output p1 hidden`}>
					{props.enteredInput === "" ? "No name entered" : props.enteredInput}
				</div>
				{props.showText ? null :
				<FormInput
					formLabel={"Enter your name"}
					handleChange={props.handleChange}
				/>
				}
				<Button
					id={"submit"}
					buttonLabel={props.showText ? "Clear Text" : "Submit"}
					handleClick={(e) => props.handleClick(e)}
				/>
			</form>
		)
	}

export default SimpleForm
