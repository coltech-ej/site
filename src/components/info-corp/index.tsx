import { Flex, Heading, Text } from '@chakra-ui/react';

interface IInfoCorpProps {
	number: string;
	type: string;
}

export function InfoCorp({ number, type }: IInfoCorpProps) {
	return (
		<Flex direction="column" align="center">
			<Heading as="h2">{number}</Heading>
			<Text textTransform="uppercase" textAlign="center">
				{type}
			</Text>
		</Flex>
	);
}
