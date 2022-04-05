import React from 'react';
import ReactDOM from 'react-dom';
import App from './frontend/App/App';
import { AuthProvider } from './frontend/context/auth-context';
import { makeServer } from './server';
import { BrowserRouter as Router } from 'react-router-dom';

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<AuthProvider>
				<App />
			</AuthProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
