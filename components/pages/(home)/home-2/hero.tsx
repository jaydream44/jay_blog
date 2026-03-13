"use client";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import MoveAnim from "@/components/framer/move-anim";
import WordAnim from "@/components/framer/word-anim";

const Hero = () => {
    return (
        <>
            <section
                className="quanto-hero2-section bg-color-primary section-padding-bottom"
                data-bg-src="images/hero/hero2-bg.png"
            >
                <div className="container custom-container">
                    <div className="row align-items-end">
                        <div className="col-lg-10">
                            <div className="hero2-content">
                                <MoveAnim>
                                    <h1 className="text-color-white">
                                        We create unique &amp; <br /> efficient
                                        digital
                                        <br /> solution
                                        <span></span>
                                    </h1>
                                </MoveAnim>
                                <div className="hero2-content-text">
                                    <MoveAnim>
                                        <WordAnim stagger="0.06">
                                            <p>
                                                We are a creative agency that
                                                specializes in providing high
                                                quality design and branding
                                                solutions to businesses.
                                            </p>
                                        </WordAnim>
                                    </MoveAnim>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 d-none d-lg-block text-end">
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        duration: 0.5,
                                    },
                                }}
                                viewport={{
                                    once: true,
                                }}
                            >
                                <Link
                                    href="#service-section"
                                    className="hero2-circle-text section-link"
                                >
                                    <Image
                                        height={243}
                                        width={243}
                                        src="/images/hero/hero2-circle-text.png"
                                        alt="circle-text"
                                        className="circle-text"
                                    />
                                    <Image
                                        height={122}
                                        width={122}
                                        src="/images/hero/hero2-circle-icon.png"
                                        alt="circle-icon"
                                        className="circle-icon"
                                    />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
