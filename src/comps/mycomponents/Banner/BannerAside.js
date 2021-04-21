import { Heading, Text, Button, Box } from '@chakra-ui/react';

const BannerAside = () => (
	<Box>
		<Heading as="h2" fontWeight="500">
			Gagnez du Temps.
			<br />
			Améliorez vos activités.
			<br />
			Réduisez vos coûts.
		</Heading>
		<Text fontSize="xs" mt={10} fontWeight="300">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> Ligula ullamcorper malesuada proin libero nunc.
			Vitae proin sagittis nisl rhoncus mattis.
		</Text>
		<Button size="md" mt={10} py={5} px={55} variant="solid" color={['lightBlue']} bg={['white', 'white', 'primary.500', 'primary.500']} _hover={{ bg: '#ebedf0' }}>
			Devis Gratuit
		</Button>
	</Box>
);

export default BannerAside;
