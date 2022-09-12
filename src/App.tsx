import { Route, Routes } from 'react-router-dom';

import Home from './routes/home/home';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	);
}
//Comment
export default App;
