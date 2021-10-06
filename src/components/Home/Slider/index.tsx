import { Swiper, SwiperSlide} from 'swiper/react'
// import { Navigation } from 'swiper'

export function Slider(){

    return(
        <Swiper
            slidesPerView={3}
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
    );
}