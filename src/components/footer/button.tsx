import { Button as ButtonChakra, Text } from '@chakra-ui/react';

interface IButtonProps {
	name: string;
}

export function Button({ name }: IButtonProps) {
	return (
		<ButtonChakra
			h="6"
			border="1px"
			borderColor="orange"
			borderRadius="12px"
			p="4"
		>
			<Text fontSize="16px" color="orange" fontWeight="400">
				{name}
			</Text>
		</ButtonChakra>
	);
}
