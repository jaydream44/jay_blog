"use client";
import { service1 } from "@/data/data";
import ServiceAreaCard from "./service-area-card";
import * as motion from "motion/react-client";

const ServiceArea = () => {
    return (
        <section className="quanto-service-section section-padding-top-bottom overflow-hidden">
            <div className="container custom-container">
                <div className="row">
                    <div className="col-12 col-lg-9 col-xl-7 col-xxl-6">
                        <motion.div
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
                            className="quanto__header"
                        >
                            <h3 className="title">
                                We help you to build digital business
                            </h3>
                        </motion.div>
                    </div>
                </div>
                <div className="row g-4 row-padding-top">
                    {service1.map((service, i) => (
                        <ServiceAreaCard key={i} data={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceArea;
