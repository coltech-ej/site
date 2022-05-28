import { Flex, GridItem } from '@chakra-ui/react';

type frameProps = {
	url: string;
	size?: string;
};

export function Frame({ url, size }: frameProps) {
	return (
		<GridItem>
			<Flex
				bgImage={`url(${url})`}
				w="100%"
				h="100%"
				bgRepeat="no-repeat"
				bgSize={size}
			/>
		</GridItem>
	);
}

Frame.defaultProps = {
	size: 'contain',
};
