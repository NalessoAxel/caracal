import React from 'react'
import { Box } from '@chakra-ui/react'

import Image from 'next/image'

const Logo = () => {
    return (
        <Box 
        width={277}
        height={120}
        bg="white"
        display="flex"
        justifyContent="center"
        alignItems="center"
        
            >
            <Image src="/Bitmap.jpg"   
            width={177}
            height={70}
            alt="Entra Group logo"
            />
        </Box>
    )
}

export default Logo
