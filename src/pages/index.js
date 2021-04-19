import { Heading, Text, Button, Flex, Box } from '@chakra-ui/react';

import Container from '_comps/Layout/Container';
import Col from '_comps/Layout/Col';

import Navbar from '../comps/YouCanAddYourComponentsInThisFolder/Navbar.js'
import Logo from '../comps/YouCanAddYourComponentsInThisFolder/Logo'
import Image from 'next/image'
const Home = () => (
	<>
	<Container h="100vh" bg="#4377DA">
		<Flex
            align="center"
            justify={"space-between"}
            direction={"row"} 
			w={"100vw"}
			h="120px"
            >
		<Logo />
		<Navbar />	

		<Button 
			mr={50}
			w="206px"
			h="60px"
            size="md"
            variant="solid"
            color={["lightBlue"]}
            _hover={{ bg: "#ebedf0" }}
            bg={["white", "white", "primary.500", "primary.500"]}>
              Testez-nous !
            </Button>
		</Flex>
		
		<Col colStart={2} colEnd={11}>
			
			<Heading as="h1" fontSize="6xl" mt={163}>
				Contact Center
				& Data Center
			</Heading>
			
		</Col>
		
		<Col colStart={2} colEnd={[26, null, null, 16]}>
		<Image src="/Image.jpg" width="923" height="541" />
		
			
		</Col>
		
		<Col colStart={18} colEnd={26} mt={24}>
			<Heading >
				Gagnez du Temps.<br />
				Améliorez vos activités.<br />
				Réduisez vos coûts.
			</Heading>
			<Text mt={10}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ligula ullamcorper malesuada proin libero nunc. Vitae proin sagittis nisl rhoncus mattis.
			</Text>
			<Button
			size="md"
			mt={10}
			variant="solid"
			color={["lightBlue"]}
			bg={["white", "white", "primary.500", "primary.500"]}
				
			>
				Devis Gratuit
			</Button>
		</Col>
		<Col colStart={1}  >
			<Box pos="absolute" top="730" left="-2">
		<Image src="/Path 2.svg" alt="" width="484" height="244" />
			</Box>
		</Col>
		
	</Container>
	<Container>
	<Col colStart={2} colEnd={4}>
		
			<Text color="#4377DA">
				Ils nous font confiance
			</Text>
		
		</Col>
		</Container>
	</>
	
);

export default Home;