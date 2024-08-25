import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { LottieHandler } from '@/Components/Feedback/LottiHandler/LottiHandler';

type SliderListProps<T> = {
  records?: T[];
  renderItem: (itemData: T) => React.ReactNode;
  emptyMessage: string;

};

type HasId = { id: number };

const HeroSliderList = <T extends HasId>({
  records = [],
  renderItem,
  emptyMessage
  
}: SliderListProps<T>): JSX.Element => {
  return (
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
      {records.length > 0 ? (
        records.map((itemData) => (
          <SwiperSlide key={itemData.id}>
            {renderItem(itemData)}
          </SwiperSlide>
        ))
      ) : (
        <SwiperSlide>
          <div>
          <LottieHandler type="empty" message={emptyMessage} />
          </div>
        </SwiperSlide>
      )}
    </Swiper>
  );
};

export default HeroSliderList;
