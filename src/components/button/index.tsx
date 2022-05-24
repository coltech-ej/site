import {
	Button as ButtonChakra,
	ButtonProps as ButtonPropsChakra,
	Text,
} from '@chakra-ui/react';

interface IButtonProps extends ButtonPropsChakra {
	children: string;
	borderRadius?: string;
}

export function Button({ children, borderRadius, ...rest }: IButtonProps) {
	return (
		<ButtonChakra
			h="6"
			border="1px"
			borderColor="orange"
			borderRadius={borderRadius || '12px'}
			p="4"
			{...rest}
		>
			<Text fontSize="16px" color="orange" fontWeight="400">
				{children}
			</Text>
		</ButtonChakra>
	);
}
