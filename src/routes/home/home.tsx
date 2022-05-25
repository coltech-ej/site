import { Flex } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';
import { Navigation } from 'swiper';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';

import { Footer, Header, Title, CardService, Button } from '../../components';
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
			</main>

			<Footer />
		</Flex>
	);
}

export default Home;
