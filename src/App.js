import react from 'react';

import { HashRouter, BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './app/home';
import Shopping from './app/shopping';
import BillingPage from './app/billing';

function App() {
	return (
		<HashRouter>
			<div className="App">
				<Route exact path="/" component={Home} />
				<Route exact path="/cart" component={Shopping} />
				<Route exact path="/billing" component={BillingPage} />
			</div>
		</HashRouter>
	);
}

export default App;
