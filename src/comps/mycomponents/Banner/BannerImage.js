import { Box, Image } from '@chakra-ui/react';

const BannerImage = () => (
	<div>
		<Box pos="relative">
			<Image src="/Image.jpg" alt="" width="923" height="541" />
			<Box pos="absolute" bottom="0" left="0">
				<Image src="/Path 2.svg" alt="" width="484" height="244" />
			</Box>
		</Box>
	</div>
);

export default BannerImage;
