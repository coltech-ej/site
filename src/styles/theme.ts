import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
	colors: {
		gray: {
			500: '#252734',
			100: '##F1F1F1',
		},
		white: '#FFFFFF',
		orange: '#F27F02',
	},
	fonts: {
		body: 'Work Sans',
		heading: 'Nunito Sans',
	},
	styles: {
		global: {
			body: {
				bg: 'gray.500',
				color: 'white',
			},
		},
	},
});
