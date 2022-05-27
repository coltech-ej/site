import { Box, Heading } from '@chakra-ui/react';

type titleProps = {
	name: string;
	color?: string;
};

export function Title({ name, color }: titleProps) {
	return (
		<Box padding="4">
			<Heading fontSize={28} color={color}>
				{name}
			</Heading>
			<Box height="5px" width="55px" bgColor="orange" />
		</Box>
	);
}

Title.defaultProps = {
	color: 'white',
};
