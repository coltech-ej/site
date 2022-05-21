import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { theme } from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<ChakraProvider theme={theme}>
				<HelmetProvider>
					<App />
				</HelmetProvider>
			</ChakraProvider>
		</BrowserRouter>
	</React.StrictMode>
);
