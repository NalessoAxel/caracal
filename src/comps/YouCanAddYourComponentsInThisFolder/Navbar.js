
import React from "react";
import { Link, Box, Flex, Text, Button, Stack } from "@chakra-ui/react";
import Col from '_comps/Layout/Col';


import Image from 'next/image'
const NavBar = () => {
    
    return (
       <Col colStart={18} colEnd={26}>
        <Flex
            align="center"
            justify={"space-between"}
            direction={"row"}
            ml="150px"
            >
            <Menu />   
        </Flex>
        </Col>
    )
}
const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
    return (
      <Link href={to}>
        <Text display="block" {...rest} ml="50px" >
          {children}
        </Text>
      </Link>
    );
  };
  const Menu = () => {
    return (
      <>
          <MenuItem   to="/">
          <Image src="/home.svg" width={30} height={30} alt="home logo"></Image>
          </MenuItem>
          <MenuItem to="/contactCenter">Contact Center </MenuItem>
          <MenuItem to="/dataCenter">Data Center</MenuItem>
          <MenuItem to="/succesStories">Succes Stories</MenuItem>
          <MenuItem to="/whyEntra" isLast>Pourquoi Entra ? </MenuItem>
      </>

    );
  };
  
export default NavBar