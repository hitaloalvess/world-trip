import { Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore ,{  Navigation, Pagination, Scrollbar, A11y  } from 'swiper'
import { Flex } from '@chakra-ui/react'
import { Continent } from '../../types';

import SlideItem from './SlideItem';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

interface SlideProps{
    continents: Continent[];
}

export function Slide({continents} : SlideProps){

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
                loop={true}
                pagination={{ clickable: true}}
            >
                { continents.map( continent => (
                    <SwiperSlide key={continent.id}>
                        <SlideItem 
                            banner={continent.banner}
                            name={continent.name}
                        />
                    </SwiperSlide>
                ))}

            </Swiper>
         </Flex>
    );
}