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
			<Box display="flex" alignItems="center">
				<Box display="flex" flexDirection="column" width="270" height="423">
					<Box>
						<Heading color="#3656BF" mb="40px">
							Tum dicere exorsus est primum igitur
						</Heading>
						<Text mt="10px" mb="40px" fontSize="12px" color="blackAlpha.800">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</Text>
					</Box>
					<Box borderBottomColor="#3656BF" borderBottomWidth="2px">
						<Text color="#3656BF">Toutes les news</Text>
					</Box>
					<Box display="flex" flexDirection="row" justifyContent="space-between" mt="40px">
						<Box ref={nextRef} cursor="pointer">
							<Image src="/arrow left.svg" alt="" />
						</Box>
						<Box ref={prevRef} cursor="pointer">
							<Image src="/arrow right.svg" alt="" />
						</Box>
					</Box>
				</Box>

				<Swiper
					loop
					slidesPerView={3}
					// navigation={{
					// 	prevEl: prevRef.current ? prevRef.current : undefined,
					// 	nextEl: nextRef.current ? nextRef.current : undefined,
					// }}
					onInit={(swiper) => {
						swiper.params.navigation.prevEl = prevRef.current;
						swiper.params.navigation.nextEl = nextRef.current;
						swiper.navigation.update();
					}}
				>
					{SwiperData.map((slide) => (
						<SwiperSlide key={slide.id}>
							<Box
								w="330px"
								h="400px"
								overflow="hidden"
								rounded="20px"
								bg="gray.100"
								color="black"
								_hover={{ bg: '#3656BF', color: 'white' }}
								mx="80px"
								cursor="pointer"
								boxSize="cover"
								display="flex"
								flexDirection="column"
								alignItems="center"
							>
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
			</Box>
		</>
	);
};

export default Slider;
