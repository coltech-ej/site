import { Flex, Text, Grid, GridItem } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';

import { Footer, Header, Title, Button, InfoCorp } from '../../components';
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

				<Flex background="gray.100" direction="column" padding="5">
					<Title name="Sobre nós" color="gray.500" />

					<Text color="gray.500" textAlign="justify" mt="3">
						Fundado no dia 26 de abril de 2016, a Coltech é uma Empresa Júnior
						de Consultoria em Engenharia formada por alunos e professores da
						UFAM e vinculada à instituição. <br /> A partir de jovens com
						necessidade de ter experiências profissionais durante a jornada na
						universidade e conhecer o mercado de trabalho.
					</Text>

					<Button w="28" mt="3" alignSelf="center" borderRadius="20px">
						Saiba mais
					</Button>

					<Grid
						w="100%"
						templateColumns="repeat(2, 1fr)"
						gap={2}
						mt="4"
						mx="auto"
					>
						<GridItem color="gray.500">
							<InfoCorp number="60K" type="faturamento" />
						</GridItem>
						<GridItem color="gray.500">
							<InfoCorp number="30" type="projetos" />
						</GridItem>
						<GridItem color="gray.500">
							<InfoCorp number="12" type="membros" />
						</GridItem>
						<GridItem color="gray.500">
							<InfoCorp number="12" type="projetos de impacto" />
						</GridItem>
					</Grid>
				</Flex>
			</main>

			<Footer />
		</Flex>
	);
}

export default Home;
