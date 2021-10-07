import { Box } from '@chakra-ui/react'
import { SwiperSlide} from 'swiper/react'

interface SlideItemProps{
    src:string;
}

export default function SlideItem(){

    return(
        <Box
            bg="red"
        >
            <h1>Slide1</h1>
        </Box>
    );
}