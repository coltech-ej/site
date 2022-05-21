import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home';

function App() {
	return (
		<main>
			<Helmet>
				<title>Coltech | Home</title>
			</Helmet>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</main>
	);
}

export default App;
