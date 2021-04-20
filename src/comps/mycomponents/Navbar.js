import { Link, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

import Col from '_comps/Layout/Col';

const NavBar = () => (
	<Col colStart={18} colEnd={26}>
		<Flex align="center" justify="space-between" direction="row" ml="150px">
			<Menu />
		</Flex>
	</Col>
);
const MenuItem = ({ children, isLast, to = '/', ...rest }) => (
	<Link href={to}>
		<Text display="block" {...rest} ml="50px">
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
	</>
);

export default NavBar;
