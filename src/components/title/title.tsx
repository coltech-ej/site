import { Box, Heading } from '@chakra-ui/react';

interface ITitleProps {
	name: string;
	color: string;
}

export function Title({ name, color }: ITitleProps) {
	return (
		<Box>
			<Heading fontSize={28} color={color}>
				{name}
			</Heading>
			<Box height="1.5" width="12" bgColor="orange" />
		</Box>
	);
}
