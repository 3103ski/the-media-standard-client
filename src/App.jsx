// --> React
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';

// --> Project Imports
import { Navbar } from 'components';
import { Pages } from 'pages';

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Pages />
			</Router>
		</div>
	);
}

export default App;
