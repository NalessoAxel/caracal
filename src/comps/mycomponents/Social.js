import { Heading, Text, Box, Image } from '@chakra-ui/react';
import {FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaYoutube} from 'react-icons/fa'
const DataCenter = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="flex-start"
            mt="100px"    
        >
            <Heading fontSize="xl">
                A vos cotés
            </Heading>
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                mt="20px"
                
            >
            <FaLinkedin  />
            <FaInstagram />
            <FaFacebook />
            <FaTwitter />
            <FaYoutube />
            </Box> 
            
        </Box>
    )
}

export default DataCenter
