import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// IMPORTAÇÃO DAS SUAS IMAGENS NA ORDEM SOLICITADA
import HeroImg from '../../assets/Hero.jpg';
import Hero0 from '../../assets/Hero0.jpg';
import Hero1 from '../../assets/Hero1.jpg';
import Hero2 from '../../assets/Hero2.jpg';
import Hero3 from '../../assets/Hero3.jpg';

const CarouselWrapper = styled.div`
  width: 100%;
  height: 100%;
  
  .swiper {
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Garante que preencha todo o espaço arredondado */
    display: block;
  }

  /* Customizando as bolinhas do carrossel para combinarem com seu layout */
  .swiper-pagination-bullet-active {
    background: #E64A19;
  }
`;

export default function HeroCarousel() {
  const images = [HeroImg, Hero0, Hero1, Hero2, Hero3];

  return (
    <CarouselWrapper>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={800} // Velocidade da transição (deslize)
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Destaque Escort ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselWrapper>
  );
}