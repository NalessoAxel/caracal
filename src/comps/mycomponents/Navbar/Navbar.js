import { Link, Flex, Text, Image, Button } from '@chakra-ui/react';

import React from 'react';

import Col from '../../Layout/Col';

const NavBar = () => (
	<Col colStart={17} colEnd={26} pl="300px" fontSize="xs" >
		<Flex align="center" justify="space-between" direction="row">
			<Menu />
		</Flex>
	</Col>
);
const MenuItem = ({ children, isLast, to = '/', ...rest }) => (
	<Link href={to}>
		<Text display="block" {...rest} ml="30px">
			{children}
		</Text>
	</Link>
);
const Menu = () => (
	<>
		<MenuItem to="/">
			<Image src="/home.svg" width={30} height={30} alt="home logo" />
		</MenuItem>
		<MenuItem to="/">Contact Center </MenuItem>
		<MenuItem to="/">Data Center</MenuItem>
		<MenuItem to="/">Succes Stories</MenuItem>
		<MenuItem to="/" isLast>
			Pourquoi Entra ?
		</MenuItem>
		<Button w="206px" h="60px" mx="30" variant="solid" color={['lightBlue']} _hover={{ bg: '#ebedf0' }} bg={['white', 'white', 'primary.500', 'primary.500']}>
			Testez-nous !
		</Button>
	</>
);

export default NavBar;
