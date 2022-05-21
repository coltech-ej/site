import { Flex, Text } from "@chakra-ui/react";

export function Banner() {
    return (
        <Flex direction="column" w='100%' h='164px'
            bgImage="url('src/assets/background.png')"
            bgSize="cover"
            align="center"
            justifyContent="center"

        >
            <Text fontSize="24px" fontFamily='Roboto' fontWeight='bold'>COLTECH</Text>
            <Text fontSize="16px" fontFamily='Nunito Sans'>Temos a melhor solução para seus problemas</Text>

        </Flex>
    );
}