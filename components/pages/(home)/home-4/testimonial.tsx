"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import TestimonialCard from "./testimonial-card";
import { testimonials3 } from "@/data/data";

const Testimonial = () => {
    return (
        <>
            <section className="quanto-testimonial2-section bg-color-2 section-padding-top-bottom overflow-hidden">
                <div className="container custom-container">
                    <div className="row row-padding-bottom">
                        <div className="col-12">
                            <div className="quanto__header">
                                <h3 className="title">Client testimonials</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 quanto_screenfix_right">
                        <div className="col-12">
                            <Swiper
                                loop={true}
                                slidesPerView={1}
                                spaceBetween={10}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay]}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 25,
                                    },
                                    1200: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                    1400: {
                                        slidesPerView: 2.5,
                                        spaceBetween: 40,
                                    },
                                }}
                                className="swiper quanto-testimonial2__slider h-100"
                            >
                                {testimonials3.slice(0, 6).map((item, i) => (
                                    <SwiperSlide key={i}>
                                        <TestimonialCard data={item} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonial;
