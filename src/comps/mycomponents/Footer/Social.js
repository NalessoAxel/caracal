import { Heading, Box, Image } from '@chakra-ui/react';

import SocialIcon from '../Data/DataSocialIcon';

const DataCenter = () => (
	<Box mt="100px">
		<Heading fontSize="xl">A vos cotés</Heading>
		<Box display="flex" flexDirection="row" justifyContent="space-between" mt="20px" />
		<Box display="flex" flexDirection="row" justifyContent="space-bewteen">
			{SocialIcon.map((icon) => (
				<Image key={icon.id} src={icon.Image} alt={icon.Title} mr="36px" />
			))}
		</Box>
	</Box>
);

export default DataCenter;
