import Header from './components/Header';
import Home from './components/Home';
import { GlobalStyle } from './GlobalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

export default function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/:movieId" exact component={Movie} />
				<Route path="/*" component={NotFound} />
			</Switch>
			<GlobalStyle />
		</Router>
	);
}
