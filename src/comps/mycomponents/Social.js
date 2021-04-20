import { Heading, Box, Image } from '@chakra-ui/react';
import SocialIcon from '../mycomponents/Data/DataSocialIcon'

const DataCenter = () => {
    return (
        <Box
            // display="flex"
            // flexDirection="column"
            // justifyContent="space-between"
            // alignItems="flex-start"
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
            </Box> 
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-bewteen"
                >

            {SocialIcon.map((icon) => (
                <Image 
                    key={icon.id} 
                    src={icon.Image} 
                    alt={icon.Title}
                    mr="36px"
                    />
                
            ))}
            </Box>
        </Box>
    )
}

export default DataCenter
