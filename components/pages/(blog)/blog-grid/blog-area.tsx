"use client";
import BlogAreaCard from "@/components/common/blog-area-card";
import Pagination from "@/components/common/pagination";
import { blogs } from "@/data/data";
import * as motion from "motion/react-client";

const BlogArea = () => {
    return (
        <section className="quanto-blog-section section-padding-bottom overflow-hidden">
            <div className="container custom-container">
                <div className="row gx-4 gy-5">
                    {/* blog card start */}
                    {blogs.slice(0, 12).map((item, i) => (
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 0.5,
                                    delay: (i % 3) * 0.2,
                                },
                            }}
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            className="col-md-6 col-lg-4"
                            key={i}
                        >
                            <BlogAreaCard data={item} />
                        </motion.div>
                    ))}
                    {/* blog card end */}
                </div>

                {/* pagination start */}
                <Pagination />
                {/* pagination end */}
            </div>
        </section>
    );
};

export default BlogArea;
