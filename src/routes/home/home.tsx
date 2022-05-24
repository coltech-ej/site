import { Flex, Text, Grid, GridItem } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';

import { Footer, Header, Title } from '../../components';
import { Banner } from '../../components/banner/banner';
import { Button } from '../../components/footer/button';
function Home() {
	return (
		<Flex h="100vh" direction="column">
			<main>
				<Helmet>
					<title>Coltech | Home</title>
				</Helmet>

				<Header />

				<Banner />

				<Flex
					background='gray.100'
					direction='column'
					padding='5'
				>
					<Title name="Sobre nós" />
					<Text color='gray.500'>
						Fundado no dia 26 de abril de 2016, a Coltech é uma Empresa Júnior de Consultoria em Engenharia formada por alunos e professores da UFAM e vinculada à instituição.

						A partir de jovens com necessidade de ter experiências profissionais durante a jornada na universidade e conhecer o mercado de trabalho.
					</Text>
					<Button name="Saiba mais" />
					<Grid>
						<GridItem>
							60
						</GridItem>
						<GridItem>
							40
						</GridItem>
						<GridItem>
							20
						</GridItem>
						<GridItem>
							10
						</GridItem>
					</Grid>
				</Flex>
			</main>

			<Footer />
		</Flex>
	);
}

export default Home;
