import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Layout/Navbar';

import Alert from './components/Layout/Alert';
import About from './pages/About';
import User from './components/Users/User';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => {
	return (
		<GithubState>
			<AlertState>
				<Router>
					<div className='App'>
						<Navbar title='Github Finder' icon='fab fa-github' />
						<div className='container'>
							<Alert />
							<Switch>
								<Route exact path='/' component={Home} />
								<Route path='/about' component={About} />
								<Route path='/user/:login' component={User} />
								<Route component={NotFound} />
							</Switch>
						</div>
					</div>
				</Router>
			</AlertState>
		</GithubState>
	);
};

export default App;
