import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import styled from 'styled-components';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SlideContent = styled.div`
  height: 400px;
  display: flex;
  background-color: #0B0B2A;
  color: white;
  justify-content: center;
  align-items: center;
`;

export default function MainCarousel() {
  return (
    <Swiper modules={[Navigation, Pagination, Autoplay]} navigation pagination autoplay={{ delay: 3000 }}>
      <SwiperSlide><SlideContent><h1>Logística que Move o Brasil</h1></SlideContent></SwiperSlide>
      <SwiperSlide><SlideContent><h1>Agilidade e Segurança</h1></SlideContent></SwiperSlide>
    </Swiper>
  );
}
