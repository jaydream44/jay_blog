"use client";
import BlogAreaCard from "@/components/common/blog-area-card";
import { blogs } from "@/data/data";
import * as motion from "motion/react-client";

const MoreArticle = () => {
    return (
        <>
            <section className="quanto-blog-section section-padding-bottom overflow-hidden">
                <div className="container custom-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="quanto__header text-center text-md-start row-padding-bottom">
                                <motion.h3
                                    initial={{ opacity: 0, x: -100 }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                        transition: {
                                            duration: 0.5,
                                        },
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.2,
                                    }}
                                    className="title"
                                >
                                    More articles
                                </motion.h3>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-4 gy-5">
                        {/* blog card start */}
                        {blogs.slice(3, 6).map((item, i) => {
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                        transition: {
                                            duration: 0.5,
                                            delay: i * 0.2,
                                        },
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.2,
                                    }}
                                    className="col-md-6 col-lg-4"
                                >
                                    <BlogAreaCard data={item} />
                                </motion.div>
                            );
                        })}
                        {/* blog card end */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default MoreArticle;
