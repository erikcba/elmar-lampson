import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img1 from '../assets/carrusel/foto01.png'
import img2 from '../assets/carrusel/foto02.png'
import img3 from '../assets/carrusel/foto03.png'
import img4 from '../assets/carrusel/foto04.png'
import img5 from '../assets/carrusel/foto05.png'

function CarouselHome() {
    return (
        <div data-aos="fade-left" className="relative w-full h-full overflow-visible">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={false}
                scrollbar={{ draggable: true }}
                className="w-full h-full"
            >
                {[img1, img2, img3, img4, img5].map((img, index) => (
                    <SwiperSlide key={index} className="flex items-center justify-center">
                        <img
                            src={img}
                            alt={`Slide ${index + 1}`}
                            className="object-contain w-full md:w-10/12 lg:w-11/12 mx-auto 2xl:h-full md:h-[600px] h-fit"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    );
}

export default CarouselHome;
