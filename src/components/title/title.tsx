import { Box, BoxProps, Heading } from '@chakra-ui/react';

interface ITitleProps extends BoxProps {
	name: string;
	color: string;
}

export function Title({ name, color, ...rest }: ITitleProps) {
	return (
		<Box {...rest}>
			<Heading fontSize={28} color={color}>
				{name}
			</Heading>
			<Box height="1.5" width="12" bgColor="orange" />
		</Box>
	);
}

Title.defaultProps = {
	color: 'white',
};
