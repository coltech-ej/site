import { Box, Heading } from '@chakra-ui/react';

type titleProps = {
	name: string;
};

function Title({ name }: titleProps) {
	return (
		<Box padding={'15px'}>
			<Heading fontSize={28}>{name}</Heading>
			<Box height="5px" width="55px" bgColor="#F27F02" />
		</Box>
	);
}

export default Title;
