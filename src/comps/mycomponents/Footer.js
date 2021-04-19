import { Heading, Text, Box, Image } from '@chakra-ui/react';
import FooterLogo from './FooterLogo';

import Col from '_comps/Layout/Col';

const Footer = () => {
    return (
        <Box
        w="100vw"
        height="482px"
        bg="#3656BF"
        >
            
            <FooterLogo />
            <Text>ENTRA</Text>
            
            
        </Box>
    )
}

export default Footer
