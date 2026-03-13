"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { projects4 } from "@/data/data";
import ProjectCardArea2 from "@/components/common/project-card-area-2";

const ProjectItem = () => {
    return (
        <section className="quanto-project-section bg-color-white section-padding-bottom">
            <div className="container custom-container">
                <div className="row quanto_screenfix_right">
                    <div className="col-12 pe-0">
                        <Swiper
                            modules={[Navigation]}
                            navigation={{
                                nextEl: ".next-btn",
                                prevEl: ".prev-btn",
                            }}
                            slidesPerView={1}
                            loop={true}
                            spaceBetween={15}
                            breakpoints={{
                                576: {
                                    slidesPerView: 1.3,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 1.5,
                                    spaceBetween: 25,
                                },
                                992: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                1200: {
                                    slidesPerView: 2.3,
                                    spaceBetween: 40,
                                },
                            }}
                            className="quanto-project__slider"
                        >
                            {/* project card start */}
                            {projects4.slice(0, 6).map((item, i) => (
                                <SwiperSlide key={i}>
                                    <ProjectCardArea2 data={item} />
                                </SwiperSlide>
                            ))}
                            {/* project card end */}
                        </Swiper>

                        <div className="quanto-project__slider-navigation row-padding-top d-flex justify-content-center align-items-center gap-3">
                            <div className="prev-btn cursor-pointer">
                                <i className="fa-solid fa-arrow-left" />
                            </div>
                            <div className="next-btn cursor-pointer">
                                <i className="fa-solid fa-arrow-right" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectItem;
