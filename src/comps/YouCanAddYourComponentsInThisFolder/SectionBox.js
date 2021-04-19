import { FaArrowRight } from 'react-icons/fa'
import Col from '_comps/Layout/Col';
import { Heading, Text, Box, Image } from '@chakra-ui/react';

const Card = () => {
    return (
        <Col colStart={14} colEnd={25} mb="170px" mt="160px">
            
            <Box
                w='618px'
                h='167px'
                overflow="hidden"
                rounded="20px"
                bg="gray.100"
                color="black"
                _hover={{ bg: "#3656BF", color: "white" }}
                cursor="pointer"
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                
                
            > 
            
                <Image 
                    src="/server.svg" 
                    alt="server image" 
                    width="63px" 
                    height="67px" 
                    color="#3656BF"
                    _hover={{ color: "white" }}
                    mx="70px" />
                
                    <Heading >
                        <Text mb="10px" fontSize="20px">Encodages et <br />traitements des données
                        </Text>
                        <Text mt="10px" fontSize="12px"> Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit.</Text>
                    </Heading>
                    <Image src="/arrow.svg" alt="arrow" color="#3656BF"></Image>
                 
            </Box>
           
            
            <Box
                w='618px'
                h='167px'
                overflow="hidden"
                rounded="20px"
                bg="gray.100"
                mt='30px'
                bg="gray.100"
                color="black"
                _hover={{ bg: "#3656BF", color: "white" }}
                cursor="pointer" 
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                >
            
                <Image  src="/phone-call.svg" 
                        alt="server image" 
                        width="55px" 
                        height="55px" 
                        color="#3656BF"
                        mx="70px" />
                
                    <Heading >
                        <Text mb="10px" fontSize="20px">Encodages et <br />traitements des données
                        </Text>
                        <Text mt="10px" fontSize="12px"> Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit.</Text>
                    </Heading>
                    <Image 
                        src="/arrow.svg" 
                        alt="arrow"
                        color="#3656BF"
                        _hover={{ color: "white" }}
                        ></Image>
              
             
            </Box>
        </Col>
    )
}
      

export default Card
