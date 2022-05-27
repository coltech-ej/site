import { Box, Flex, Heading } from '@chakra-ui/react';

type CardImageProps = {
	tag: string;
	title: string;
};

export function CardImage({ tag, title }: CardImageProps) {
	return (
		<Flex h="500px" align="center" justifyContent="center">
			<Flex
				w="85%"
				h="450px"
				alignItems="flex-end"
				borderRadius="10"
				bgColor="grey"
				// bgImage="linear-gradient(rgba(0,0,0, 0.5), rgba(0, 0, 0,0.6)), url('src/assets/card-eletrica.jpg')"
				bgSize="cover"
			>
				<Box marginLeft="5" marginBottom="5">
					<Box
						bgColor="orange"
						display="inline-flex"
						paddingLeft="3"
						paddingRight="3"
						borderRadius="12"
						marginBottom="2"
					>
						{tag}
					</Box>
					<br />
					<Heading size="md">{title}</Heading>
				</Box>
			</Flex>
		</Flex>
	);
}
