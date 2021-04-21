import { Heading, Text, Box, Image, Icon, createIcon } from '@chakra-ui/react';

import Col from '../../Layout/Col';

const Card = () => (
	<>
		<Box display="flex" flexDirection={['column', 'column', 'row', 'row', 'row']} justifyContent="space-between" alignItems={['center']}>
			<Box display="flex" flexDirection={['row', 'column', 'column', 'column', 'column']} alignItems={['center', 'center', 'flex-start', 'flex-start', 'flex-start']}>
				<Heading as="h4" fontSize="3xl" color="#4377DA">
					Services personnalisés.
					<br />
					Dans vos Locaux.
					<br />
					Ou les nôtres.
				</Heading>
				<Text mt={['3', '3', '3', '4', '5']} color="#000">
					Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor.
				</Text>
			</Box>
			<Box w={['100vw', '100vw', '100vw', 'auto']}>
				<Box
					w={['100vw', '100vw', '100vw', '32vw', '40vw']}
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
					pos="relative"
				>
					<Box pos="absolute" zIndex="100" bottom="-2" right="-20">
						<Image src="/illustration-1.svg" alt="" />
					</Box>

					<Image src="/Server_blue.png" alt="server image" width="90px" height="90px" mx="70px" color="#3656BF" _hover={{ bg: '#3656BF', color: 'white' }} mx="70px" />
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
					w={['100vw', '100vw', '50vw', '32vw', '40vw']}
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
					pos="relative"
				>
					<Box pos="absolute" zIndex="100" bottom="-2" right="-20">
						<Image src="/illustration-1.svg" alt="" />
					</Box>
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
			</Box>
		</Box>
	</>
);

export default Card;
