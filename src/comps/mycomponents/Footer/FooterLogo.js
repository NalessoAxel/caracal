import { Image, Text, Box } from '@chakra-ui/react';

const FooterLogo = () => (
	<Box display="flex" alignItems="center" mt="70px">
		<Image src="/Oval.svg" alt="logo footer" />
		<Text color="whiteAlpha.900" fontSize="3xl" ml="20px">
			Entra
		</Text>
	</Box>
);

export default FooterLogo;
