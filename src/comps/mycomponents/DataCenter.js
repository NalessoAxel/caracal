import { Heading, Text, Box, Image } from '@chakra-ui/react';

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
                Data Center
            </Heading> 
            <Text my="20px">Encodage</Text>
            <Text my="20px">Mise à jour de base de donnés</Text>
            <Text my="20px">Scanning</Text>
            <Text my="20px">Secrétariat</Text>
            
            
        </Box>
    )
}

export default DataCenter
