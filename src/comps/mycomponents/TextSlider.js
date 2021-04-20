import { Heading, Text, Box, Image } from '@chakra-ui/react';

const TextSlider = (props) => (
	<Box>
		<Box>
			<Heading color="#3656BF" mb="40px">
				Tum dicere exorsus est primum igitur
			</Heading>
			<Text mt="10px" mb="40px" fontSize="12px" color="blackAlpha.800">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</Text>
		</Box>
		<Box borderBottomColor="#3656BF" borderBottomWidth="2px">
			<Text color="#3656BF">Toutes les news</Text>
		</Box>
		<Box display="flex" flexDirection="row" justifyContent="space-between" mt="40px">
			<Image src="/arrow left.svg" alt="" />
			<Image src="/arrow right.svg" alt="" />
		</Box>
	</Box>
);

export default TextSlider;
