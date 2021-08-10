import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import './css/App.css';

function App() {
	return (
		<ChakraProvider>
			<Router>
				<NavBar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/cart">
						<Cart />
					</Route>
				</Switch>
			</Router>
		</ChakraProvider>
	);
}

export default App;
