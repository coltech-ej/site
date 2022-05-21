import { Flex, Image, ListItem, UnorderedList } from '@chakra-ui/react';

import { Button } from './button';

export function Footer() {
	return (
		<Flex
			as="footer"
			direction="column"
			p="4"
			bg="gray.100"
			alignItems="center"
		>
			<Image
				src="src/assets/capa_coltech_laranja_cinza.png"
				alt="logo coltech completo"
				w="32"
				h="8"
			/>
			<UnorderedList
				color="gray.500"
				styleType="none"
				textAlign="center"
				fontSize="16px"
				my="4"
			>
				<ListItem>Home</ListItem>
				<ListItem>Sobre Nós</ListItem>
				<ListItem>Serviços</ListItem>
				<ListItem>Portfólio</ListItem>
				<ListItem>Contato</ListItem>
			</UnorderedList>

			<Button name="Orçamento" />
		</Flex>
	);
}
