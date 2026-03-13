"use client";
import MarqueeArea3 from "@/components/common/marquee-area-3";
import Link from "next/link";

const Hero = () => {
    return (
        <>
            <section
                className="quanto-hero3-section"
                data-bg-src="/images/hero/hero3-thumb.png"
            >
                <div className="container-fluid px-0 overflow-hidden">
                    <div className="row">
                        <div className="col-12 position-relative">
                            <div className="quanto-hero3__content">
                                <MarqueeArea3 data="design studio" />
                                <div className="content-info">
                                    <Link
                                        href="#about-section"
                                        className="section-jump section-link"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={44}
                                            height={70}
                                            viewBox="0 0 44 70"
                                            fill="none"
                                        >
                                            <rect
                                                x="0.5"
                                                y="0.5"
                                                width={43}
                                                height={69}
                                                rx="21.5"
                                                stroke="#313131"
                                            />
                                            <path
                                                d="M14.4403 40.4802C14.4254 40.4953 14.3116 40.9594 14.1875 41.5115C14.0634 42.0636 13.9808 42.5213 14.0039 42.5287C14.027 42.536 14.4018 42.5931 14.8368 42.6555C15.7104 42.781 16.7303 43.0848 17.3682 43.4095C19.3562 44.4214 20.6725 46.237 21.0147 48.439L21.1018 48.9997L21.98 48.9997L22.8583 48.9997L22.9417 48.4915C23.4881 45.1618 25.9232 42.9909 29.5674 42.5848C29.8054 42.5583 30 42.5266 30 42.5144C30 42.4021 29.5614 40.5413 29.5266 40.5062C29.5015 40.4807 29.2784 40.4996 29.031 40.5483C26.291 41.0867 24.0613 42.6285 23.1291 44.6292L22.9054 45.1091L22.8879 35.2402L22.8768 21L21.0995 21L21.0883 35.2562L21.0707 45.1019L20.7705 44.496C19.9916 42.9242 18.4637 41.6797 16.413 40.9469C15.8287 40.7381 14.4967 40.4229 14.4403 40.4802Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </Link>
                                    <p
                                        className="word-anim"
                                        data-delay="0.60"
                                        data-lag="0.1"
                                        data-stagger="0.08"
                                    >
                                        We redefine creative possibilities,
                                        ensuring your brand stands the forefront
                                        of design
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
