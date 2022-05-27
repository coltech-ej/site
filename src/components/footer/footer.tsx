import {
	Box,
	Flex,
	Grid,
	GridItem,
	Icon,
	Image,
	ListItem,
	Text,
	UnorderedList,
} from '@chakra-ui/react';
import {
	FaInstagram,
	FaFacebook,
	FaWhatsapp,
	FaSpotify,
	FaYoutube,
} from 'react-icons/fa';

import { Button } from '../button';

export function Footer() {
	return (
		<Flex
			as="footer"
			direction="column"
			p="4"
			bg="gray.100"
			alignItems="center"
			borderTopRadius="30"
		>
			<Image
				src="src/assets/capa_coltech_laranja_cinza.png"
				alt="logo coltech completo"
				h="10"
				mx="auto"
			/>
			<UnorderedList
				color="gray.500"
				styleType="none"
				textAlign="center"
				fontSize="16px"
				my="4"
				mx="auto"
			>
				<ListItem>Home</ListItem>
				<ListItem>Sobre Nós</ListItem>
				<ListItem>Serviços</ListItem>
				<ListItem>Portfólio</ListItem>
				<ListItem>Contato</ListItem>
			</UnorderedList>

			<Button>Orçamento</Button>

			<Grid templateColumns="repeat(5, 1fr)" gap={3} mx="auto" my="4">
				<GridItem>
					<Icon as={FaInstagram} w="6" h="6" color="gray.500" />
				</GridItem>
				<GridItem>
					<Icon as={FaFacebook} w="6" h="6" color="gray.500" />
				</GridItem>
				<GridItem>
					<Icon as={FaWhatsapp} w="6" h="6" color="gray.500" />
				</GridItem>
				<GridItem>
					<Icon as={FaSpotify} w="6" h="6" color="gray.500" />
				</GridItem>
				<GridItem>
					<Icon as={FaYoutube} w="6" h="6" color="gray.500" />
				</GridItem>
			</Grid>

			<Box textAlign="center" width="80%">
				<Text fontSize="12px" color="gray.500">
					Desenvolvido por Arco - Consultoria em Arquitetura e Design e Coltech
					Consultoria
				</Text>
			</Box>
		</Flex>
	);
}
