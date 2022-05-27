import { Flex, Grid, GridItem } from '@chakra-ui/react';

import { Frame } from '../frame/frame';
import { Title } from '../title/title';

export function OurPartners() {
	return (
		<Flex w="100vw" bgColor="gray.100" direction="column">
			<Title name="Nossos parceiros" color="gray.500" />
			<Flex grow="1" marginBottom="25" marginTop="25">
				<Grid w="100%" h="60%" marginTop="0.5" templateColumns="repeat(3, 1fr)">
					<GridItem border="1px solid black">
						<Frame />
					</GridItem>
					<GridItem border="1px solid black">
						<Frame />
					</GridItem>
					<GridItem border="1px solid black">
						<Frame />
					</GridItem>
				</Grid>
			</Flex>
		</Flex>
	);
}
