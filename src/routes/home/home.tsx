import { Flex } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';

import { Footer } from '../../components/footer/footer';

function Home() {
	return (
		<Flex h="100vh" direction="column">
			<main>
				<Helmet>
					<title>Coltech | Home</title>
				</Helmet>
				<h1>jdfadfjads</h1>
			</main>
			<Footer />
		</Flex>
	);
}

export default Home;
