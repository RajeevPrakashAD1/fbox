import react from 'react';

import { HashRouter, BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './app/home';

function App() {
	return (
		<HashRouter>
			<div className="App">
				<Route exact path="/" component={Home} />
			</div>
		</HashRouter>
	);
}

export default App;
