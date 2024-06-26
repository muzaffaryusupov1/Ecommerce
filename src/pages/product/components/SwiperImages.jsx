import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import '../../../assets/scss/global/_styles.scss';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Skeleton from 'react-loading-skeleton';
import SwiperSkeleton from '../skeleton/SwiperSkeleton';

export default function SliderImages({ product, loading }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className='slider'>
            <div className="slider-main__images">
                {loading ? <Skeleton width={350} height={300} /> : <Swiper
                    style={{
                        '--swiper-navigation-color': '#000',
                        '--swiper-pagination-color': '#000',
                    }}
                    spaceBetween={10}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    <Swiper

                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        {
                            product.images.map((item, key) => (
                                <SwiperSlide key={key}>
                                    <img src={item} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </Swiper>
                }
            </div>
            {loading ? <SwiperSkeleton cards={4} /> : <Swiper
                onSwiper={setThumbsSwiper}
                // loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                navigation={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {
                    product.images.map((item, key) => (
                        <SwiperSlide key={key}>
                            <img src={item} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            }
        </div>
    );
}
