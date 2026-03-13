"use client";
import MoveAnim from "@/components/framer/move-anim";
import WordAnim from "@/components/framer/word-anim";
import Image from "next/image";
import * as motion from "motion/react-client";

const Hero = () => {
    return (
        <>
            <section className="quanto-hero4-section overflow-hidden">
                <div className="container custom-container">
                    <div className="row g-4 justify-content-between align-items-end">
                        <div className="col-md-3 col-xxl-2 order-1 order-md-0">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.5,
                                        delay: 0.2,
                                    },
                                }}
                                viewport={{ once: true }}
                                className="quanto-hero4__info"
                            >
                                <h4 className="rating-point">4.8</h4>
                                <div className="stars">
                                    <ul className="custom-ul">
                                        {Array.from({
                                            length: 5,
                                        }).map((_, i) => (
                                            <li key={i}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M14.8328 9.16783L12 0L9.16718 9.16783H0L7.41641 14.8339L4.58359 24.0017L12 18.3357L19.4164 24.0017L16.9734 16.0956L12.6545 17.7925L16.5841 14.8355L16.5836 14.8339L24 9.16783H14.8328Z"
                                                        fill="#0F0F0F"
                                                    />
                                                </svg>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <WordAnim>
                                    <p>
                                        2500+ reviews based on client feedback
                                    </p>
                                </WordAnim>
                            </motion.div>
                        </div>
                        <div className="col-md-9 col-xl-9 order-0 order-md-1 position-relative">
                            <MoveAnim>
                                <div className="quanto-hero4__content">
                                    <h1 className="title">
                                        Elevate your brand
                                        <br />
                                        with our magic
                                        <span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={160}
                                                height={96}
                                                viewBox="0 0 160 96"
                                                fill="none"
                                            >
                                                <path
                                                    d="M149 61.9999L111 61.9999L95 61.9999C83.9543 61.9999 75 53.0456 75 41.9999L75 24.5C75 14.5589 66.9411 6.5 57 6.5V6.5C47.0589 6.5 39 14.5589 39 24.5L39 41.9999C39 53.0456 30.0457 61.9999 19 61.9999L4.85196e-06 61.9999"
                                                    stroke="currentColor"
                                                    strokeWidth={12}
                                                    strokeMiterlimit={1}
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M125 37L153 62L125 87"
                                                    stroke="currentColor"
                                                    strokeWidth={12}
                                                    strokeMiterlimit={1}
                                                    strokeLinecap="square"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    </h1>
                                    <p>
                                        Provide the best service and without
                                        revision restrictions, we are ready to
                                        help your business grow more.
                                    </p>
                                </div>
                            </MoveAnim>
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="quanto-hero__thumb section-margin-top overflow-hidden">
                                <Image
                                    height={0}
                                    width={0}
                                    sizes="100vw"
                                    src="/images/hero/hero4-thumb.png"
                                    alt="hero-4-thumb"
                                    className="w-100 d-block"
                                    data-speed="0.8"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
