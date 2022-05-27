import { Flex, Image } from '@chakra-ui/react';

type frameProps = {
	url?: string;
};

export function Frame({ url }: frameProps) {
	return (
		<Flex flexGrow="1" border="1px solid yellow" justify="center">
			<Image src={`url(${url})`} border="1px solid green" bgSize="cover" />;
		</Flex>
	);
}

Frame.defaultProps = {
	url: "'src/assets/icon-arco.png'",
};
