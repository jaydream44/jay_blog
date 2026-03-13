"use client";
import React from "react";
import Pagination from "@/components/common/pagination";
import { blogs3 } from "@/data/data";
import BlogAreaCard from "./blog-area-card";
import * as motion from "motion/react-client";

const BlogArea = () => {
    return (
        <section className="quanto-blog-section section-padding-bottom overflow-hidden">
            <div className="container custom-container">
                <div className="row g-4 g-xl-6 quanto-blog3__row overflow-hidden">
                    {/* blog card start */}
                    {blogs3.slice(0, 8).map((item, i) => (
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
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
                            className="col-xl-6"
                            key={i}
                        >
                            <BlogAreaCard data={item} />
                        </motion.div>
                    ))}
                    {/* blog card end */}
                </div>

                {/* Pagination */}
                <Pagination />
            </div>
        </section>
    );
};

export default BlogArea;
