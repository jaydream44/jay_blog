"use client";
import MoveAnim from "@/components/framer/move-anim";
import WordAnim from "@/components/framer/word-anim";
import Hyperlink from "@/components/ui/hyperlink";
import Image from "next/image";
import * as motion from "motion/react-client";

const Hero = () => {
    return (
        <>
            <section className="quanto-hero5-section bg-color-primary section-padding-bottom">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, originY: "top" }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: {
                            duration: 0.8,
                            delay: 0.2,
                        },
                    }}
                    viewport={{ once: true }}
                    className="hero5-bg"
                    data-bg-src="/images/hero/hero5-bg.png"
                ></motion.div>

                <div className="container custom-container position-relative z-2">
                    <div className="row g-4 justify-content-between align-items-end">
                        <div className="col-lg-8 col-xl-9">
                            <MoveAnim>
                                <div className="quanto-hero5__content">
                                    <h1 className="title text-color-white">
                                        <div className="arrow-box">
                                            <Image
                                                height={120}
                                                width={120}
                                                src="/images/hero/hero5-arrow.svg"
                                                alt="arrow"
                                            />
                                        </div>
                                        <div>We make</div>
                                        <div className="text-indent">
                                            interface
                                        </div>
                                    </h1>
                                </div>
                            </MoveAnim>
                        </div>
                        <div className="col-lg-4 col-xl-3">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.8,
                                        delay: 0.6,
                                    },
                                }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="quanto-hero5__info"
                            >
                                <WordAnim>
                                    <p>
                                        We are a creative agency that
                                        specializes in providing high quality
                                        design and branding solutions to
                                        businesses.
                                    </p>
                                </WordAnim>
                                <Hyperlink
                                    href="/portfolio-card"
                                    variant="primary"
                                >
                                    Start a project
                                </Hyperlink>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
