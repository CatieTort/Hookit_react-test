import React from 'react';
import Loader from './Components/Loader';
import Button from './Components/Button';
import SimpleForm from './Components/SimpleForm';
import './App.scss';

function App() {
  return (
    <div className="app__container">
			<div className="app__header view-header">
				Hookit React Test Site
			</div>

			<div className="app__content">
				<div className="content-box">
					<div className="loader__container hidden">
						<Loader />
					</div>
					<div className="btn__container">
						<Button
							buttonLabel={"Show Loader"}
						/>
					</div>
				</div>
				<div className="form__container content-box">
					<SimpleForm />
				</div>
	    </div>

		</div>
  );
}

export default App;
