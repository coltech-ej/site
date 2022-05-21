import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	);
}

export default App;
