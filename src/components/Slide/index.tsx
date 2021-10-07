import { Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore ,{  Navigation, Pagination, Scrollbar, A11y  } from 'swiper'
import { Flex } from '@chakra-ui/react'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SlideItem from './SlideItem';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

export function Slider(){

    return(
        <Flex
            direction="row"
            w={["100%", "80%"]}
            h={["250px", "450px"]}
            mx="auto"
            my="10"
        >
            <Swiper
                slidesPerView={1}
                navigation
                pagination={{ clickable: true}}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <SlideItem />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideItem />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideItem />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideItem />
                </SwiperSlide>
            </Swiper>
         </Flex>
    );
}