import { Heading, Text, Button } from '@chakra-ui/react';

const BannerAside = () => (
	<div>
		<Heading fontWeight="500">
			Gagnez du Temps.
			<br />
			Améliorez vos activités.
			<br />
			Réduisez vos coûts.
		</Heading>
		<Text mt={10}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ligula ullamcorper malesuada proin libero nunc. Vitae proin
			sagittis nisl rhoncus mattis.
		</Text>
		<Button size="md" mt={10} py={5} px={55} variant="solid" color={['lightBlue']} bg={['white', 'white', 'primary.500', 'primary.500']} _hover={{ bg: '#ebedf0' }}>
			Devis Gratuit
		</Button>
	</div>
);

export default BannerAside;
