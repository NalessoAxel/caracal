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
            >
            
            {SwiperData.map((slide) => (
                <SwiperSlide key={slide.Id}>
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
                        alignItems="center">
                        <Image src={slide.image} alt={slide.title} />
                            <Heading fontSize="14px" mx="30px" my="20px">
                                {slide.title}
                            </Heading>
                                <Text fontSize="10px" mx="30px" my="20px">
                                    {slide.descritpion}
                                </Text>
                    </Box>
                </SwiperSlide>
            ))}
            </Swiper>
        </>
    )
}

export default Slider
