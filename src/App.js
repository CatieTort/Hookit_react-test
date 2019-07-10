import React from 'react';
import Loader from './Components/Loader';
import Button from './Components/Button';
import FormInput from './Components/FormInput';
import './App.scss';

function App() {
  return (
    <div className="app__container">
			<div className="loader__container">
				<Loader />
			</div>
			<div className="btn__container">
				<Button />
			</div>
			<div className="form__container">
				<form className="sample__form">
					<FormInput />
					<FormInput />
				</form>
			</div>
    </div>
  );
}

export default App;
