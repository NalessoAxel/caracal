import { Swiper, SwiperSlide } from 'swiper/react';
import { Heading, Text, Box, Image } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

import SwiperData from '../mycomponents/Data/DataSlide'

const Slider = () => {
    return (
        <>
            <Swiper
            loop={true}
            slidesPerView={3}
            pagination={{ clickable: true }}
            
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            
            {SwiperData.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <Box
                        w='330px'
                        h='400px'
                        overflow="hidden"
                        rounded="20px"
                        bg="gray.100"
                        color="black"
                        _hover={{ bg: "#3656BF", color: "white" }}
                        mx="50px"
                        cursor="pointer"
                        boxSize="cover"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                    >
                    <Image src={slide.Image} alt={slide.title} />
                    <Heading fontSize="14px" mx="30px" my="20px">
                        {slide.Title}
                    </Heading>
                    <Text fontSize="10px" mx="30px" my="20px">
                        {slide.Descritpion}
                    </Text>
              
                    </Box>

                </SwiperSlide>
            ))}
           
            
            </Swiper>
        </>
    )
}

export default Slider
