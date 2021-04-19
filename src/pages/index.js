import { Heading, Text, Button, Flex, Box, Color } from '@chakra-ui/react';

import Container from '_comps/Layout/Container';
import Col from '_comps/Layout/Col';

import Navbar from '../comps/mycomponents/Navbar.js'
import Logo from '../comps/mycomponents/Logo'
import Image from 'next/image'
import Card from '../comps/mycomponents/Card.js'
import ContainerApiText from '../comps/mycomponents/ContainerApiText'
import ContainerApi from '../comps/mycomponents/ContainerApi'
import TextSlider from '../comps/mycomponents/TextSlider'
import Slider from '../comps/mycomponents/Slider'

import FooterLogo from '../comps/mycomponents/FooterLogo'
import Footer from '../comps/mycomponents/Footer'
import Contact from '../comps/mycomponents/Contact.js'
import DataCenter from '../comps/mycomponents/DataCenter'
import Social from '../comps/mycomponents/Social'


const Home = () => (

	<>
	<Container h="100vh" bg="#4377DA">
		<Flex
            align="center"
            justify={"space-between"}
            direction={"row"} 
			w="100vw"
			h="120px"
            >
		<Logo />
		<Navbar />	
		<Button 
			mr="20px"
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
		{/* <Col colStart={1}  >
			<Box>
		<Image src="/Path 2.svg" alt="" width="484" height="244" />
			</Box>
		</Col> */}
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
		
		
	</Container>
	<Container>
	<Col colStart={2} colEnd={26} mt="145px">
		<Box >
			<Flex 
				align="center"
				justifyContent="space-between"
			>
			<Text 
				color="#4377DA"
				borderBottom="2px"
				borderBottomWidth="3px"
				my="100px">
				Ils nous font <br /> confiance
			</Text>
			<Image src="/Roularta.png" alt="" width="268" height="62" />
			<Image src="/Alpha.png" alt="" width="221" height="54" />
			<Image src="/caterpil.png" alt="" width="222" height="36" />
			<Image src="/Orange.png" alt="" width="66" height="66" />
			<Image src="/Worldine.png" alt="" width="144" height="26" />
			</Flex>
			</Box>
		</Col>
		</Container>
		<Container>
			<Col colStart={3} colEnd={9} mt="235px">
					<Box>
						<Heading as="h4" fontSize="3xl" color="#4377DA">
							Services personnalisés.<br />
							Dans vos Locaux.<br />
							Ou les nôtres.
						</Heading>
						<Text mt="4" color="#000">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
						</Text>
					</Box>
			</Col>
			<Card />
			
		</Container>
		<Container 
			bg="#3656BF" 
			w="100vw"
            h="542px"
		>
			<Col colStart={3} colEnd={10} mt="235px" >
			<ContainerApiText />
			</Col>
			<Col colStart={14} colEnd={25} mb="170px" mt="235px">
			<ContainerApi />
			</Col>
		</Container>
		<Container width="100vw" height="832px" bg="white">
			<Col colStart={3} colEnd={8} mt="235px" >
				<TextSlider  />
				
			</Col>
			<Col colStart={9} colEnd={26} mt="235px">
			<Slider />
			</Col>
		</Container>
		<Container w="100vw"
        height="482px"
        bg="#3656BF">
			<Footer />
			<Col colStart={2} colEnd={3}>
				<FooterLogo />
			</Col>
			
			
			<Col colStart={11} colEnd={14}>
			<Contact />
			</Col>
			<Col colStart={15} colEnd={18}>
			<DataCenter />
			</Col>
			<Col colStart={19} colEnd={26}>
			<Social />
			</Col>
		</Container>
	</>
	
);

export default Home;
