import { Box, Image } from '@chakra-ui/react';

const BannerImage = () => (
	<div>
		<Box pos="relative" zIndex="100" bottom="49" ml="2">
			<Image src="/Image.jpg" alt="" />
		</Box>
		<Box pos="absolute" bottom="0" left="0" zIndex="200">
			<Image src="/Path 2.svg" alt="" />
		</Box>
	</div>
);

export default BannerImage;
