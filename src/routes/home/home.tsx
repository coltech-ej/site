import { Flex } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';

import { Footer, Header } from '../../components';
import { Banner } from '../../components/banner/banner';

function Home() {
	return (
		<Flex h="100vh" direction="column">
			<main>
				<Helmet>
					<title>Coltech | Home</title>
				</Helmet>

				<Header />

				<Banner />
			</main>

			<Footer />
		</Flex>
	);
}

export default Home;
