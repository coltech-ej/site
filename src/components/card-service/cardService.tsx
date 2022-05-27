import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

export function CardService() {
	return (
		<Flex
			w="100%"
			minHeight="sm"
			direction="column"
			align="flex-start"
			bg="gray.100"
			borderRadius="10"
		>
			<Image
				src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
				alt="computatação"
				w="100%"
				h="44"
				borderTopRadius="10"
			/>

			<Flex direction="column" p="4" align="flex-start">
				<Box bg="orange" w="32" h="6" borderRadius={20} my="2">
					<Text fontSize="16px">Computação</Text>
				</Box>

				<Heading color="gray.500" fontSize="20px" my="4">
					Aplicativos para Android
				</Heading>

				<Text textAlign="justify" color="gray.500" fontSize="16px">
					Desenvolvemos apps e os desponibilizamos na loja de aplicativos. Mais
					patricidade
				</Text>
			</Flex>
		</Flex>
	);
}
