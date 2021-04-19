import React from 'react'
import { Box } from '@chakra-ui/react'

import Image from 'next/image'

const Logo = () => {
    return (
        <Box >
            <Image src="/Bitmap.jpg"   
            width={277}
            height={120}
            alt="Entra Group logo"/>
        </Box>
    )
}

export default Logo
