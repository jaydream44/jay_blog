"use client";
import Link from "next/link";
import { services2 } from "@/data/data";
import * as motion from "motion/react-client";

const ServiceArea = () => {
    return (
        <section className="quanto-service3-section section-padding-top-bottom">
            <div className="container custom-container">
                <div className="row g-4 justify-content-end">
                    <div className="col-md-10 col-lg-9 col-xl-7">
                        {/* service card start */}
                        {services2.map((item, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.5,
                                    },
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.6,
                                }}
                                className="quanto-service-box3"
                                key={i}
                            >
                                <div className="box-content">
                                    <h4>
                                        <Link href={item.link}>
                                            {item.title}
                                        </Link>
                                    </h4>
                                    <p>{item.description}</p>
                                </div>
                                <Link
                                    href={item.link}
                                    className="quanto-link-btn"
                                >
                                    <span>
                                        <i className="fa-solid fa-arrow-right arry1" />
                                        <i className="fa-solid fa-arrow-right arry2" />
                                    </span>
                                </Link>
                            </motion.div>
                        ))}
                        {/* service card end */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceArea;
