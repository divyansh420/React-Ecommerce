import { ChakraProvider } from '@chakra-ui/react';

import Home from './pages/Home';
import NavBar from './components/Navbar';
import './css/App.css';

function App() {
	return (
		<ChakraProvider>
			<NavBar />
		</ChakraProvider>
	);
}

export default App;
