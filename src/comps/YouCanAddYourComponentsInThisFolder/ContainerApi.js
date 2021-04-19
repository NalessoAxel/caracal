import React from 'react'
import Col from '_comps/Layout/Col';
import { Heading, Text, Box, Image } from '@chakra-ui/react';

const ContainerApi = () => {
    return (
        <>
           <Box
            bg="#3656BF"
            w="100vw"
            h="542px"
           >
               <Col colStart={3}>
				<Heading as="h4" fontSize="3xl" color="#4377DA">
					Services personnalisés.
					Dans vos Locaux.<br />
					Ou les nôtres.
					</Heading>
					<Text mt="4" color="#000">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
					</Text>
				</Col>
            </Box> 
        </>
    )
}

export default ContainerApi
