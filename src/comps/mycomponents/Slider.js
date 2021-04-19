import { Swiper, SwiperSlide } from 'swiper/react';
import { Heading, Text, Box, Image } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import './swiper/swiper.scss';
// import 'swiper/components/scrollbar/scrollbar.scss';
// import 'swiper/components/navigation/navigation.scss';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const Slider = () => {
    return (
        <Box
        color="blackAlpha.800"
        
        >
            <Swiper
            
            slidesPerView={3}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide>
            <Box
                w='330px'
                h='400px'
                overflow="hidden"
                rounded="20px"
                bg="gray.100"
                color="black"
                _hover={{ bg: "#3656BF", color: "white" }}
                cursor="pointer"
                // display="flex"
                // flexDirection="row"
                // justifyContent="space-between"
                // alignItems="center"
                
                
            > 
            </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box
                w='330px'
                h='400px'
                overflow="hidden"
                rounded="20px"
                bg="gray.100"
                color="black"
                _hover={{ bg: "#3656BF", color: "white" }}
                cursor="pointer"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="center"    
            > 
            <Image 
                src="/Rectangle-1.jpg" 
                alt=""
                 />
            </Box>
            </SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            
            </Swiper>
        </Box>
    )
}

export default Slider
