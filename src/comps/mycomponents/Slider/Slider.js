import { Heading, Text, Box, Image } from '@chakra-ui/react';
import { useRef } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperData from '../Data/DataSlide';

SwiperCore.use([Navigation]);

const Slider = () => {
	const prevRef = useRef(null);
	const nextRef = useRef(null);

	return (
		<>
			<Swiper
				loop
				slidesPerView={3}
				onInit={(swiper) => {
					swiper.params.navigation.prevEl = prevRef.current;
					swiper.params.navigation.nextEl = nextRef.current;
					swiper.navigation.update();
				}}
			>
				{SwiperData.map((slide) => (
					<SwiperSlide key={slide.id}>
						<Box>
							<Box
								w="200px"
								h="300px"
								overflow="hidden"
								rounded="10"
								bg="gray.100"
								color="black"
								_hover={{ bg: '#3656BF', color: 'white' }}
								cursor="pointer"
								display="flex"
								flexDirection="column"
								alignItems="center"
							>
								<Image src={slide.image} alt={slide.title} />
								<Heading as="h3" fontSize="14px" mx="30px" my="10px">
									{slide.title}
								</Heading>
								<Text fontSize="10px" mx="30px" mb="20px">
									{slide.descritpion}
								</Text>
							</Box>
						</Box>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default Slider;
