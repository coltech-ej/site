import { Flex } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';

import { Footer, Header, Title } from '../../components';
import { Banner } from '../../components/banner/banner';
import { CardImage } from '../../components/card-image/card-image';

function Home() {
	return (
		<Flex h="100vh" direction="column">
			<main>
				<Helmet>
					<title>Coltech | Home</title>
				</Helmet>

				<Header />

				<Banner />
				<Title name="Portfolio" />
				<CardImage tag="Elétrica" title="Instalação Elétrica" />
			</main>

			<Footer />
		</Flex>
	);
}

export default Home;
