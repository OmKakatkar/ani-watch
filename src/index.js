import React from 'react';
import ReactDOM from 'react-dom';
import App from './frontend/App/App';
import { AuthProvider } from './frontend/context/auth-context';
import { makeServer } from './server';
import { BrowserRouter as Router } from 'react-router-dom';
import { PlaylistProvider } from './frontend/context/playlist-context';

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<AuthProvider>
				<PlaylistProvider>
					<App />
				</PlaylistProvider>
			</AuthProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
