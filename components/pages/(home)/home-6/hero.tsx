"use client";
import MoveAnim from "@/components/framer/move-anim";
import WordAnim from "@/components/framer/word-anim";
import Image from "next/image";

const Hero = () => {
    return (
        <>
            <section
                className="quanto-hero6-section bg-color-white position-relative overflow-hidden"
                data-bg-src
            >
                <div className="quanto-hero6__thumb">
                    <Image
                        height={0}
                        width={0}
                        sizes="100vw"
                        src="/images/hero/hero6-thumb.png"
                        alt="hero-thumb"
                        className="h-100 w-auto"
                    />
                </div>
                <div className="container custom-container position-relativ">
                    <div className="row align-items-end">
                        <div className="col-md-6 quanto-hero6__content-col">
                            <div className="quanto-hero6__content">
                                <MoveAnim delay={0.45}>
                                    <h1>Steven Enderson</h1>
                                </MoveAnim>
                                <WordAnim>
                                    <p>
                                        Building digital products, brands, and
                                        experience
                                    </p>
                                </WordAnim>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
