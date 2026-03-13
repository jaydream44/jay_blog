"use client";
import MoveAnim from "@/components/framer/move-anim";
import Hyperlink from "@/components/ui/hyperlink";
import Image from "next/image";
import * as motion from "motion/react-client";
import useMediaQuery from "@/hooks/useMediaQuery";

const AboutArea = () => {
    const isMobile = useMediaQuery("(max-width: 767px)");

    return (
        <>
            <style>{`
                .section-content > div {
                    margin-bottom: 28px;
                }
            
            `}</style>
            <section className="quanto-about-area2 bg-color-white section-padding-top">
                <div className="container custom-container">
                    <div className="row justify-content-end">
                        <div className="col-xl-8 col-xxl-7">
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
                        <div className="col-xl-6 col-xxl-6">
                            <div className="row g-4 justify-content-between has-scale">
                                <div className="col-12 col-md-5 col-lg-5 col-xl-5">
                                    <figure className="overflow-hidden mt-n100">
                                        <motion.div
                                            initial={{
                                                x: isMobile ? -150 : -200,
                                                opacity: 0,
                                            }}
                                            whileInView={{ x: 0, opacity: 1 }}
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
                                                data-speed="0.8"
                                                className="w-100"
                                            />
                                        </motion.div>
                                    </figure>
                                </div>
                                <div className="col-12 col-md-7 col-lg-7 col-xl-6">
                                    <figure className="overflow-hidden mt-100">
                                        <motion.div
                                            initial={{
                                                x: isMobile ? -150 : -200,
                                                opacity: 0,
                                            }}
                                            whileInView={{ x: 0, opacity: 1 }}
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
                                                src="/images/about/about-thumb-2-2.png"
                                                alt="about-thumb"
                                                data-speed="0.8"
                                                className="w-100"
                                            />
                                        </motion.div>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-xxl-5">
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutArea;
