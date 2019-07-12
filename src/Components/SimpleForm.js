import React from 'react'
import FormInput from './FormInput';

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
				<button
					type="submit"
					className="btn"
					onClick={(e) => props.handleClick(e)}
					onKeyPress={(e) => props.handleClick(e)}
				>{props.showText ? "Clear Text" : "Submit"}</button>
			</form>
		)
	}

export default SimpleForm
