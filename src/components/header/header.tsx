import {
	Flex,
	Grid,
	GridItem,
	Link,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Icon,
} from '@chakra-ui/react';
import { MdMenu, MdClose } from 'react-icons/md';

import { ColtechLogo } from '../../assets/icons';

export function Header() {
	return (
		<Flex as="header" width="100%" h="65px" bg="gray.500">
			<Grid
				templateColumns="repeat(3,1fr)"
				width="100%"
				h="100%"
				mx="auto"
				alignItems="center"
				justifyContent="space-between"
				px="5"
			>
				<GridItem>
					<Menu>
						<MenuButton as={MdMenu} size={28} />
						<MenuList bg="gray.500" border="none" minWidth="150px">
							<MenuItem
								_focus={{ boxShadow: 'none' }}
								justifyContent="flex-end"
							>
								<Icon as={MdClose} />
							</MenuItem>
							<MenuItem _focus={{ boxShadow: 'outline', bg: 'orange' }}>
								Home
							</MenuItem>
							<MenuItem _focus={{ boxShadow: 'outline', bg: 'orange' }}>
								Sobre Nós
							</MenuItem>
							<MenuItem _focus={{ boxShadow: 'outline', bg: 'orange' }}>
								Portfólio
							</MenuItem>
							<MenuItem _focus={{ boxShadow: 'outline', bg: 'orange' }}>
								Contato
							</MenuItem>
						</MenuList>
					</Menu>
				</GridItem>
				<GridItem justifySelf="center" gridColumn="2">
					<Link href="/">
						<ColtechLogo width="10" height="10" />
					</Link>
				</GridItem>
				<GridItem />
			</Grid>
		</Flex>
	);
}
