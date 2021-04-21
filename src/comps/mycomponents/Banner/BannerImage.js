import { Box, Image } from '@chakra-ui/react';

const BannerImage = () => (
	<div>
		<Box>
			<Image src="/Image.jpg" alt="" width="923" height="541" />
			<Box pos="absolute" bottom="-6" left="-2">
				<Image src="/Path 2.svg" alt="" />
			</Box>
		</Box>
	</div>
);

export default BannerImage;
