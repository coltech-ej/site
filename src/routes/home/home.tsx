import { Flex, Text, Grid, GridItem } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';
import { Navigation } from 'swiper';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';

import {
	Footer,
	Header,
	Title,
	CardService,
	Button,
	InfoCorp,
} from '../../components';
import { Banner } from '../../components/banner/banner';

// Import Swiper styles
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/navigation';
import '../../styles/styles.scss';

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

				<Flex as="section" direction="column" pt="4" pb="12" align="center">
					<Title mx="4" name="Portfólio" color="white" alignSelf="flex-start" />
				</Flex>

				<Flex as="section" direction="column" pt="4" pb="12" align="center">
					<Title
						mx="4"
						name="Nossos Serviços"
						color="white"
						alignSelf="flex-start"
					/>

					<Flex w="100%" h="lg">
						<Swiper slidesPerView={1} navigation modules={[Navigation]}>
							<SwiperSlide
								style={{
									padding: 32,
								}}
							>
								<CardService />
							</SwiperSlide>
							<SwiperSlide
								style={{
									padding: 32,
								}}
							>
								<CardService />
							</SwiperSlide>
							<SwiperSlide
								style={{
									padding: 32,
								}}
							>
								<CardService />
							</SwiperSlide>
							<SwiperSlide
								style={{
									padding: 32,
								}}
							>
								<CardService />
							</SwiperSlide>
						</Swiper>
					</Flex>

					<Button bg="transparent" borderRadius="20">
						Ver serviços
					</Button>
				</Flex>
				<Flex
					as="section"
					direction="column"
					pt="4"
					pb="12"
					align="center"
					bgColor="gray.100"
				>
					<Title
						mx="4"
						name="Nossos parceiros"
						color="gray.500"
						alignSelf="flex-start"
					/>
				</Flex>
				<Flex as="section" direction="column" pt="4" pb="12" align="center">
					<Title
						mx="4"
						name="Nossos clientes"
						color="white"
						alignSelf="flex-start"
					/>
				</Flex>
			</main>

			<Footer />
		</Flex>
	);
}

export default Home;
