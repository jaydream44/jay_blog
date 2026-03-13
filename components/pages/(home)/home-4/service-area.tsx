"use client";
import ServiceAreaCard from "./service-area-card";
import { services3 } from "@/data/data";
import * as motion from "motion/react-client";

const ServiceArea = () => {
    return (
        <section className="quanto-service5-section section-padding-top-bottom overflow-hidden">
            <div className="container custom-container">
                <div className="row">
                    <div className="col-12 col-lg-9 col-xl-7 col-xxl-6">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 0.5,
                                    delay: 0.3,
                                },
                            }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="quanto__header"
                        >
                            <h3 className="title">
                                We help you to build digital business
                            </h3>
                        </motion.div>
                    </div>
                </div>
                <div className="row gx-4 gy-5 row-padding-top">
                    {/* service card start */}
                    {services3.map((item, i) => (
                        <div key={i} className="col-md-6 col-lg-4 col-xxl-3">
                            <ServiceAreaCard data={item} i={i} />
                        </div>
                    ))}
                    {/* service card end */}
                </div>
            </div>
        </section>
    );
};

export default ServiceArea;
