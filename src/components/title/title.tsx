import { Box, Heading } from '@chakra-ui/react';

type titleProps = {
	name: string;
};

export function Title({ name }: titleProps) {
	return (
		<Box padding="4">
			<Heading fontSize={28}>{name}</Heading>
			<Box height="5px" width="55px" bgColor="orange" />
		</Box>
	);
}
