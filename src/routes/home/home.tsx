import { Flex } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';
import { Navigation } from 'swiper';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';

import { Footer, Header, Title } from '../../components';
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

				<Title name="Nossos Serviços" />

				<Flex w="100%" h="xs">
					<Swiper
						slidesPerView={1}
						spaceBetween={30}
						loop
						pagination={{
							clickable: true,
						}}
						navigation
						modules={[Navigation]}
						className="mySwiper"
					>
						<SwiperSlide>Slide 1</SwiperSlide>
						<SwiperSlide>Slide 2</SwiperSlide>
						<SwiperSlide>Slide 3</SwiperSlide>
						<SwiperSlide>Slide 4</SwiperSlide>
					</Swiper>
				</Flex>
			</main>

			<Footer />
		</Flex>
	);
}

export default Home;
