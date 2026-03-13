"use client";
import { blogs2 } from "@/data/data";
import BlogAreaCard from "./blog-area-card";
import * as motion from "motion/react-client";

const BlogArea = () => {
    return (
        <>
            <div className="quanto-blog2-section section-padding-top">
                <div className="container custom-container">
                    <div className="row g-4">
                        <div className="col-12 col-xl-6 col-xxl-5 gsap-sticky">
                            <div className="quanto__header text-center text-lg-start">
                                <h3 className="title">
                                    Our latest news and insights
                                </h3>
                            </div>
                        </div>
                        <div className="col-12 col-xl-6 col-xxl-6 gsap-scroll">
                            <div className="row quanto-blog2__row">
                                {/* blog area card start */}
                                {blogs2.map((item, i) => (
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                duration: 0.5,
                                                delay: i * 0.1,
                                            },
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.6,
                                        }}
                                        className="col-12"
                                        key={i}
                                    >
                                        <BlogAreaCard data={item} />
                                    </motion.div>
                                ))}
                                {/* blog area card end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogArea;
