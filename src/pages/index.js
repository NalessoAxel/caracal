import { Box, Image } from '@chakra-ui/react';

import Col from '_comps/Layout/Col';
import Container from '_comps/Layout/Container';

import BannerAside from '../comps/mycomponents/Banner/BannerAside';

import BannerImage from '../comps/mycomponents/Banner/BannerImage';
import FlowerImage from '../comps/mycomponents/Banner/FlowerImage';
import HeadingBanner from '../comps/mycomponents/Banner/HeadingBanner';

import Card from '../comps/mycomponents/Card/Card';
import CardAside from '../comps/mycomponents/Card/CardAside';

import Contact from '../comps/mycomponents/Footer/Contact';
import DataCenter from '../comps/mycomponents/Footer/DataCenter';
import Footer from '../comps/mycomponents/Footer/Footer';
import FooterLogo from '../comps/mycomponents/Footer/FooterLogo';
import Social from '../comps/mycomponents/Footer/Social';
import Logo from '../comps/mycomponents/Navbar/Logo';
import Navbar from '../comps/mycomponents/Navbar/Navbar';
import SectionPartner from '../comps/mycomponents/SectionPartner/SectionPartener';
import Slider from '../comps/mycomponents/Slider/Slider';
import SliderText from '../comps/mycomponents/Slider/SliderText';
import FormApi from '../comps/mycomponents/User/FormAPI';
import FormText from '../comps/mycomponents/User/FormText';
import SquarImage from '../comps/mycomponents/User/SquarImage';

const Home = () => (
	<>
		<Container maxW="100%" w="100vw" bgGradient="linear(to-r, #447ADC, #2146BB)" pos="relative" display="flex" alignItems="center" justifyContent="space-between" flexDirection="row">
			<Logo />
			<Navbar />
		</Container>
		<Container maxW="100%" w="100vw" h="87vh" bgGradient="linear(to-r, #447ADC, #2146BB)" pos="relative">
			<Col colStart={5} colEnd={11}>
				<HeadingBanner />
			</Col>
			<Col colStart={14} colEnd={26}>
				<FlowerImage />
			</Col>
			<Col colStart={5} colEnd={17}>
				<BannerImage />
			</Col>
			<Col colStart={3} colEnd={9}>
				<Box pos="absolute" bottom="-16" left="-5" zIndex="200">
					<Image src="/Path 2.svg" alt="" />
				</Box>
			</Col>
			<Col colStart={18} colEnd={27} zIndex="1000" ml="30" pos="absolute" top="270">
				<BannerAside />
			</Col>
		</Container>
		<Container w="100vw" maxW="100%">
			<Col colStart={2} colEnd={26} mt="145px">
				<SectionPartner />
			</Col>
		</Container>
		<Container my="235">
			{/* <Col colStart={3} colEnd={[9]} mt="235px">
				<CardAside />
			</Col> */}
			<Col colStart={3} colEnd={24}>
				<Card />
			</Col>
		</Container>
		<Container bgGradient="linear(to-r, #447ADC, #2146BB)" w="100vw" maxW="100%" h="542px" pos="relative">
			<Col colStart={3} colEnd={10} mt="235px">
				<FormText />
			</Col>
			<Col colStart={14} colEnd={25} mb="170px" mt="235px">
				<FormApi />
			</Col>
			<Col colStart={25} colEnd={27} mt="235px">
				<SquarImage />
			</Col>
		</Container>
		<Container width="100vw" height="832px" bg="white">
			<Col colStart={3} colEnd={7} mt="235px">
				<SliderText />
			</Col>
			<Col colStart={10} colEnd={23} mt="235px">
				<Slider />
			</Col>
		</Container>
		<Container w="100vw" maxW="100%" height="482px" bgGradient="linear(to-r, #447ADC, #2146BB)">
			<Footer />
			<Col colStart={2} colEnd={3}>
				<FooterLogo />
			</Col>
			<Col colStart={12} colEnd={15}>
				<Contact />
			</Col>
			<Col colStart={16} colEnd={19}>
				<DataCenter />
			</Col>
			<Col colStart={20} colEnd={26}>
				<Social />
			</Col>
		</Container>
	</>
);

export default Home;
