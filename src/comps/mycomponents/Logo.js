import { Box } from '@chakra-ui/react';

import Image from 'next/image';
import React from 'react';

const Logo = () => (
	<Box width={277} height={120} bg="white" display="flex" justifyContent="center" alignItems="center">
		<Image src="/Bitmap.jpg" width={177} height={70} alt="Entra Group logo" />
	</Box>
);

export default Logo;
