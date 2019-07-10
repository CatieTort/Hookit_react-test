import React from 'react';

const FormInput = (props) => {
  	const { formLabel, type, name, handleChange, validationError, handleClick, placeholder } = props;

    return (
    	<label>
				<span className="input__label">{ formLabel }</span>
        <input
          className={`input__input-box ${validationError && validationError===true ? "hasError" : "noError"}`}
          name={name ? name : ""}
          type={type ? type : "text" }
          value={props.value}
          onChange={handleChange}
					onClick={handleClick}
					placeholder={placeholder}
					/>
      </label>
    )
}

export default FormInput;
