import { Heading, Text, Box, Image } from '@chakra-ui/react';

const Contact = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="flex-start"
            mt="100px"    
        >
            <Heading fontSize="xl">
                Contact Center
            </Heading> 
            <Text my="20px">Managed Insourcing</Text>
            <Text my="20px">Gestion de crise</Text>
            <Text my="20px">Sélection de clients et propests</Text>
            
            
        </Box>
    )
}

export default Contact
