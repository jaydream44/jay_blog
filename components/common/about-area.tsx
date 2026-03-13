"use client";
import MarqueeArea2 from "@/components/common/marquee-area-2";
import Hyperlink from "@/components/ui/hyperlink";
import Image from "next/image";
import MoveAnim from "../framer/move-anim";
import * as motion from "motion/react-client";

interface Props {
    style?: "style-2";
}

const AboutArea = ({ style }: Props) => {
    return (
        <>
            <section
                className={`quanto-about-area2 section-padding-top ${
                    style === "style-2" ? "bg-color-white" : "bg-color-2"
                }`}
            >
                <div className="container custom-container">
                    <div className="row">
                        <div className="col-xl-9 col-xxl-8 mx-auto">
                            <div className="quanto__header text-center text-lg-start">
                                <MoveAnim>
                                    <h3 className="title">
                                        We believe in the power of design to
                                        elevate businesses and product solutions
                                    </h3>
                                </MoveAnim>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 justify-content-between row-padding-top overflow-hidden">
                        <div className="col-md-6 col-xl-5 col-xxl-4 d-flex align-items-xl-center order-1 order-xl-0 overflow-hidden">
                            <div className="overflow-hidden w-100">
                                <motion.div
                                    initial={{
                                        x: -150,
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
                                >
                                    <Image
                                        height={0}
                                        width={0}
                                        sizes="100vw"
                                        src="/images/about/about-thumb-2-1.png"
                                        alt="about-thumb"
                                        className="w-100"
                                    />
                                </motion.div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-xxl-4 order-0 order-xl-1">
                            <div className="section-content">
                                <MoveAnim>
                                    <p>
                                        Our approach is all about understanding
                                        your needs and bringing your ideas to
                                        life without complexity. We thrive
                                        turning imaginative concepts into user
                                        friendly digital solutions. Whether
                                        it&apos;s a sleek website, a
                                        user-friendly app or a memorable brand
                                        identity, we focus on creating designs
                                        that not only.
                                    </p>
                                </MoveAnim>
                                <MoveAnim>
                                    <p>
                                        Designing immersive digital experiences,
                                        or developing strategic marketing
                                        campaigns, we approach each project with
                                        meticulous attention to detail.
                                    </p>
                                </MoveAnim>
                                <Hyperlink href="/about">
                                    More about us
                                </Hyperlink>
                                <figure className="overflow-hidden w-100">
                                    <div className="overflow-hidden">
                                        <motion.div
                                            initial={{
                                                x: -150,
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
                                        >
                                            <Image
                                                height={350}
                                                width={380}
                                                src="/images/about/about-thumb-2-2.png"
                                                alt="about-thumb"
                                                className="w-100"
                                                style={{
                                                    aspectRatio: 38 / 35,
                                                }}
                                            />
                                        </motion.div>
                                    </div>
                                </figure>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-2 d-flex align-items-xl-center order-xl-2 overflow-hidden">
                            <div className="overflow-hidden w-100">
                                <motion.div
                                    initial={{
                                        x: -100,
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
                                >
                                    <Image
                                        height={0}
                                        width={0}
                                        sizes="100vw"
                                        src="/images/about/about-thumb-2-3.png"
                                        alt="about-thumb"
                                        className="w-100"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* marque area start */}
                <MarqueeArea2 />
                {/* marque area end */}
            </section>
        </>
    );
};

export default AboutArea;
