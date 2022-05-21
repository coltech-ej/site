import { Flex } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';

import { Title, Footer } from '../../components';

function Home() {
	return (
		<Flex h="100vh" direction="column">
			<main>
				<Helmet>
					<title>Coltech | Home</title>
				</Helmet>

				<Title name="Portfólio" />
			</main>
			<Footer />
		</Flex>
	);
}

export default Home;
