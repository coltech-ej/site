import { Box, Flex, Heading } from '@chakra-ui/react';

type CardImageProps = {
	tag: string;
	title: string;
	url: string;
};

export function CardImage({ url, tag, title }: CardImageProps) {
	return (
		<Flex justifyContent="center" marginBottom="4">
			<Flex
				w="80%"
				h="400"
				alignItems="flex-end"
				borderRadius="10"
				bgColor="grey"
				background={`linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${url})`}
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
