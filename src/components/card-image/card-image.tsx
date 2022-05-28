import { Box, Flex, Heading } from '@chakra-ui/react';

type CardImageProps = {
	tag: string;
	title: string;
	url: string;
	h?: string;
};

export function CardImage({ url, tag, title, h }: CardImageProps) {
	return (
		<Flex justifyContent="center" mt="5">
			<Flex
				w="85%"
				h={h}
				paddingRight="5"
				paddingLeft="5"
				paddingBottom="5"
				alignItems="flex-end"
				borderRadius="10"
				bgColor="grey"
				background={`linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${url})`}
				bgSize="cover"
			>
				<Box>
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
					<Box>
						<Heading size="md">{title}</Heading>
					</Box>
				</Box>
			</Flex>
		</Flex>
	);
}

CardImage.defaultProps = {
	h: '400',
};
