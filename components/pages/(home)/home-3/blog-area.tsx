"use client";
import BlogAreaCard from "@/components/common/blog-area-card";
import Hyperlink from "@/components/ui/hyperlink";
import { blogs } from "@/data/data";
import * as motion from "motion/react-client";

const BlogArea = () => {
    return (
        <>
            <section className="quanto-blog-section bg-color-2 section-padding-top-bottom">
                <div className="container custom-container">
                    <div className="row g-3 align-items-end">
                        <div className="col-12 col-lg-9 col-xl-7 col-xxl-6">
                            <div className="quanto__header text-center text-md-start">
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
                                        amount: 0.6,
                                    }}
                                    className="title"
                                >
                                    Latest blog to boost your productivity
                                </motion.h3>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 col-xl-5 col-xxl-6">
                            <div className="quanto__headerr d-flex justify-content-center justify-content-lg-end">
                                <Hyperlink href="/blog-grid">
                                    View all articles
                                </Hyperlink>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 row-padding-top">
                        {/* blog card start */}
                        {blogs.slice(0, 3).map((blog, i) => {
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
                                        amount: 0.6,
                                    }}
                                    className="col-md-6 col-lg-4"
                                >
                                    <BlogAreaCard
                                        data={blog}
                                        varient="style-3"
                                    />
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

export default BlogArea;
