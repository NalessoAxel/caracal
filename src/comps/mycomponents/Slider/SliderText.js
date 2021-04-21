import { Heading, Text, Box, Image } from '@chakra-ui/react';

const SliderText = () => (
	<div>
		<Box display="flex" flexDirection="column">
			<Box>
				<Heading as="h2" color="#3656BF" fontSize="24" mb="40px">
					Tum dicere exorsus est primum igitur
				</Heading>
				<Text mt="10px" mb="40px" fontSize="12px" color="blackAlpha.800">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</Text>
			</Box>
			<Box w="120px">
				<Text color="#3656BF" borderBottomColor="#3656BF" borderBottomWidth="2px">
					Toutes les news
				</Text>
			</Box>
			<Box display="flex" flexDirection="row" justifyContent="space-between" mt="40px">
				<Box cursor="pointer">
					<Image src="/arrow left.svg" alt="" />
				</Box>
				<Box cursor="pointer">
					<Image src="/arrow right.svg" alt="" />
				</Box>
			</Box>
		</Box>
	</div>
);

export default SliderText;
