"use client";
import Hyperlink from "@/components/ui/hyperlink";
import { projects } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import MoveAnim from "@/components/framer/move-anim";
import * as motion from "motion/react-client";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

const ProjectArea = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const isMobile = useMediaQuery("(max-width: 767px)");
    const horizontalScrollRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

    return (
        <>
            <div className="quanto-project-section section-padding-bottom">
                <div
                    ref={containerRef}
                    style={{
                        position: "relative",
                        minHeight: isMobile ? "auto" : "400vh",
                        transition: "min-height 0.3s ease",
                    }}
                    className="container custom-container "
                >
                    <div
                        className="col-12"
                        style={{
                            position: "sticky",
                            top: 0,
                            height: isMobile ? "auto" : "100vh",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <div className="quanto__header text-center">
                            <MoveAnim>
                                <h3 className="title">Latest projects</h3>
                            </MoveAnim>
                        </div>

                        <motion.div
                            ref={horizontalScrollRef}
                            className="project-horizontal-scrolling horizontal-scroll"
                            style={{
                                x: isMobile ? 0 : x,
                                display: "flex",
                                flexDirection: isMobile ? "column" : "row",
                                gap: "40px",
                                width: isMobile
                                    ? "100%"
                                    : `calc(100% + 80px * ${
                                          projects.length - 1
                                      })`,
                            }}
                        >
                            {projects.slice(0, 6).map((item, i) => (
                                <div
                                    className="quanto-project-box scroll-item overflow-hidden"
                                    key={i}
                                >
                                    <Link href="/portfolio-details">
                                        <motion.div
                                            initial={{
                                                x: isMobile ? -200 : -300,
                                                opacity: 0,
                                            }}
                                            whileInView={{
                                                x: 0,
                                                opacity: 1,
                                            }}
                                            transition={{
                                                duration: 0.6,
                                                ease: "easeOut",
                                            }}
                                            viewport={{
                                                once: true,
                                                amount: 0.1,
                                            }}
                                            className="quanto-project-thumb overflow-hidden"
                                        >
                                            <Image
                                                height={568}
                                                width={600}
                                                src={item.image}
                                                alt="project-thumb"
                                                className="w-100"
                                                priority
                                                style={{
                                                    aspectRatio: "75/71",
                                                }}
                                            />
                                        </motion.div>
                                    </Link>
                                    <div className="quanto-project-content">
                                        <h5 className="line-clamp-1">
                                            <Link href="/portfolio-details">
                                                {item.title}
                                            </Link>
                                        </h5>
                                        <span className="quanto-project-date text-color-primary">
                                            {item.date}
                                            <i className="bi bi-dash" />
                                            {item.category}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div className="row row-padding-top">
                            <div className="col-12 text-center">
                                <Hyperlink
                                    variant="primary"
                                    href="/portfolio-gallery"
                                >
                                    View more works
                                </Hyperlink>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectArea;
