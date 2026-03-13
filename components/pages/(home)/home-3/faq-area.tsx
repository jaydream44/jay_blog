"use client";
import { faq } from "@/data/data";
import FaqAreaBar from "./faq-area-bar";
import * as motion from "motion/react-client";

interface Props {
    style?: "style-1";
}

const FaqArea = ({ style }: Props) => {
    return (
        <section
            id="quanto-faq-area"
            className={`quanto-faq-area bg-color-white overflow-hidden ${
                style === "style-1"
                    ? "section-padding-bottom"
                    : "section-padding-top-bottom"
            }`}
        >
            <div className="container custom-container">
                <div className="row g-4 justify-content-between">
                    <div className="col-lg-6 col-xl-5 col-xxl-4 gsap-sticky">
                        <div className="quanto__header">
                            <motion.h3
                                className="title"
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
                            >
                                Questions and answers
                            </motion.h3>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-7 col-xxl-7 gsap-scroll">
                        <div
                            className="accordion quanto-faq-accordion"
                            id="accordionExample"
                        >
                            {/* faq bar start */}
                            {faq.slice(0, 8).map((item, i) => (
                                <FaqAreaBar key={i} data={item} i={i} />
                            ))}
                            {/* faq bar end */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqArea;
