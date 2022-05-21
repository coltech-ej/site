import { Box } from '@chakra-ui/react';
import CardImage from '../../components/card-image/card-image';
// import { CardImage, Title } from '../../components';
import Title from '../../components/title/title';
function Home() {
	return (
		<Box className="Portfolio">
			<Title name="Portfólio" />
			<CardImage></CardImage>
		</Box>
	);
}

export default Home;
