import { Flex } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';

import { Footer, Header, Title, CardImage } from '../../components';
import { Banner } from '../../components/banner/banner';
import { OurPartners } from '../../components/our-partners/our-partners';

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
				<CardImage
					url="src/assets/card-eletrica.jpg"
					tag="Elétrica"
					title="Instalação Elétrica"
				/>
				<CardImage
					url="src/assets/card-eletrica.jpg"
					tag="Elétrica"
					title="Instalação Elétrica"
				/>
				<OurPartners />
				<Title name="Nossos clientes" />
			</main>

			<Footer />
		</Flex>
	);
}

export default Home;
