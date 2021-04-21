import { Heading, Text, Box, Image } from '@chakra-ui/react';

import Col from '../../Layout/Col';

const Card = () => (
	<Col colStart={14} colEnd={25} mb="170px" mt="160px">
		<Box
			w="618px"
			h="167px"
			overflow="hidden"
			rounded="20px"
			bg="gray.300"
			color="black"
			_hover={{ bg: '#3656BF', color: 'white' }}
			cursor="pointer"
			display="flex"
			flexDirection="row"
			justifyContent="space-between"
			alignItems="center"
		>
			<Col colStart={23}>
				<Box pos="absolute" zIndex="100">
					<Image src="/illustration-1.svg" alt="" width="auto" height="auto" />
				</Box>
			</Col>
			<Image src="/Server_blue.png" alt="server image" width="90px" height="90px" color="#3656BF" _hover={{ bg: '#3656BF', color: 'white' }} mx="70px" />
			<Heading>
				<Text mb="10px" fontSize="20px">
					Encodages et <br />
					traitements des données
				</Text>
				<Text mt="10px" fontSize="12px">
					{' '}
					Lorem ipsum dolor sit amet, <br />
					consectetur adipiscing elit.
				</Text>
			</Heading>
			<Image src="/arrow.svg" alt="arrow" color="#3656BF" _hover={{ color: 'white' }} />
		</Box>

		<Box
			w="618px"
			h="167px"
			overflow="hidden"
			rounded="20px"
			bg="gray.300"
			mt="30px"
			color="black"
			_hover={{ bg: '#3656BF', color: 'white' }}
			cursor="pointer"
			display="flex"
			flexDirection="row"
			justifyContent="space-between"
			alignItems="center"
		>
			<Image src="/phone-call.svg" alt="server image" width="55px" height="55px" color="#3656BF" mx="70px" />

			<Heading>
				<Text mb="10px" fontSize="20px">
					Encodages et <br />
					traitements des données
				</Text>
				<Text mt="10px" fontSize="12px">
					{' '}
					Lorem ipsum dolor sit amet, <br />
					consectetur adipiscing elit.
				</Text>
			</Heading>
			<Image src="/arrow.svg" alt="arrow" color="#3656BF" _hover={{ color: 'white' }} />
		</Box>
	</Col>
);

export default Card;