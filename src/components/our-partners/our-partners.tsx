import { Flex, Grid } from '@chakra-ui/react';

import { Frame } from '../frame/frame';
import { Title } from '../title/title';

export function OurPartners() {
	return (
		<Flex bgColor="gray.100" direction="column" pt="4" pb="12">
			<Title
				mx="4"
				name="Nossos parceiros"
				color="gray.500"
				alignSelf="flex-start"
			/>
			<Grid
				templateColumns="repeat(3, 1fr)"
				mt="45"
				gap="3"
				minH="120"
				pl="3"
				pr="3"
			>
				<Frame url="src/assets/icon-arco.png" />
				<Frame url="src/assets/icon-labtekh.png" />
				<Frame url="src/assets/icon-energyc.png" />
			</Grid>
		</Flex>
	);
}
