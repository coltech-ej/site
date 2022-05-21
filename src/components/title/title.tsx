import { Box, chakra, Heading } from '@chakra-ui/react';

type titleProps = {
	name: string;
};

const TitleUnderlined = chakra(Box, {
	baseStyle: {
		/*border: '1px solid white',*/
		paddingLeft: '15px',
	},
});

function Title({ name }: titleProps) {
	return (
		<TitleUnderlined>
			<Heading fontSize={28}>{name}</Heading>
			<Box
				/*border={'1px solid white'}*/
				height="5px"
				width="55px"
				bgColor="#F27F02"
			/>
		</TitleUnderlined>
	);
}

export default Title;
