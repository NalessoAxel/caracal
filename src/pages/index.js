import { Heading, Text, Button, Flex, Box } from '@chakra-ui/react';

import Image from 'next/image';

import Col from '_comps/Layout/Col';
import Container from '_comps/Layout/Container';

import BannerAside from '../comps/mycomponents/Banner/BannerAside';

import BannerImage from '../comps/mycomponents/Banner/BannerImage';
import HeadingBannder from '../comps/mycomponents/Banner/HeadingBannder';

import Card from '../comps/mycomponents/Card';

import Contact from '../comps/mycomponents/Contact';
import DataCenter from '../comps/mycomponents/DataCenter';
import Footer from '../comps/mycomponents/Footer/Footer';
import FooterLogo from '../comps/mycomponents/Footer/FooterLogo';
import Social from '../comps/mycomponents/Footer/Social';
import Logo from '../comps/mycomponents/Navbar/Logo';
import Navbar from '../comps/mycomponents/Navbar/Navbar';
import NavButton from '../comps/mycomponents/Navbar/NavButton';
import Slider from '../comps/mycomponents/Slider/Slider';
import FormApi from '../comps/mycomponents/User/FormAPI';
import FormText from '../comps/mycomponents/User/FormText';

const Home = () => (
	<>
		<Container h="100vh" bgGradient="linear(to-r, #447ADC, #2146BB)">
			<Box display="flex" alignItems="center" justifyContent="space-between" flexDirection="row" w="100vw" h="120px">
				<Logo />
				<Navbar />
				<NavButton />
			</Box>

			<Col colStart={3} colEnd={10} mt="120px">
				<HeadingBannder />
			</Col>
			<Col colStart={3} colEnd={[26, null, null, 16]}>
				<BannerImage />
			</Col>
			<Col colStart={18} colEnd={26} mt={24}>
				<BannerAside />z
			</Col>
		</Container>
		<Container>
			<Col colStart={2} colEnd={26} mt="145px">
				<Box>
					<Flex align="center" justifyContent="space-between">
						<Text color="#4377DA" borderBottom="2px" borderBottomWidth="3px" my="100px">
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
						Services personnalisés.
						<br />
						Dans vos Locaux.
						<br />
						Ou les nôtres.
					</Heading>
					<Text mt="4" color="#000">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
					</Text>
				</Box>
			</Col>
			<Card />
		</Container>
		<Container bgGradient="linear(to-r, #447ADC, #2146BB)" w="100vw" h="542px">
			<Col colStart={3} colEnd={10} mt="235px">
				<FormText />
			</Col>
			<Col colStart={14} colEnd={25} mb="170px" mt="235px">
				<FormApi />
			</Col>
		</Container>
		<Container width="100vw" height="832px" bg="white">
			<Col colStart={3} colEnd={27} mt="235px">
				<Slider />
			</Col>
		</Container>
		<Container w="100vw" height="482px" bgGradient="linear(to-r, #447ADC, #2146BB)">
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
