"use client";

import { workingProcess } from "@/data/data";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useHoverEffect from "@/hooks/animation/useHoverEffect";
import useMediaQuery from "@/hooks/useMediaQuery";

const WorkingProcess = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    useHoverEffect(containerRef);

    const isMobile = useMediaQuery("(max-width: 767px)");

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

    return (
        <>
            <section className="work-process-section bg-color-primary section-padding-top-bottom">
                <div
                    className="container custom-container"
                    ref={containerRef}
                    style={{
                        position: "relative",
                        minHeight: isMobile ? "auto" : "400vh",
                        backgroundColor: "var(--color-primary)",
                        transition: "min-height 0.3s ease",
                    }}
                >
                    <div
                        style={{
                            position: "sticky",
                            top: 0,
                            height: isMobile ? "auto" : "100vh",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <div className="row g-4 mx-0">
                            <div className="col-lg-10 col-xl-9 col-xxl-6">
                                <div className="quanto__header">
                                    <h3 className="title text-color-white text-center text-md-start">
                                        Our simple effective working process
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <motion.div
                            className="process-box-wrapper horizontal-scroll d-flex row-padding-top"
                            style={{
                                x: isMobile ? 0 : x,
                                display: "flex",
                                flexDirection: isMobile ? "column" : "row",
                                width: isMobile
                                    ? "100%"
                                    : `calc(100% + 6.5vw * ${
                                          workingProcess.length - 1
                                      })`,
                            }}
                        >
                            {workingProcess.map((step, index) => (
                                <div
                                    className="process-box scroll-item"
                                    key={index}
                                    style={{ width: "100vw", flexShrink: 0 }}
                                >
                                    <span className="process-number" />
                                    <div className="process-info">
                                        <h5 className="process-title text-color-white">
                                            {step.title}
                                        </h5>
                                        <p className="text-color-white">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WorkingProcess;
