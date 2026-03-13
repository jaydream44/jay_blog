"use client";
import Meter from "@/components/common/meter";
import Hyperlink from "@/components/ui/hyperlink";
import Image from "next/image";
import * as motion from "motion/react-client";

const funFacts = [
    { value: 17, suffix: "+", label: "Years of agency experience" },
    { value: 220, suffix: "+", label: "Successfully projects done" },
    { value: 46, suffix: "+", label: "World-wide team members" },
    { value: 98, suffix: "%", label: "Clients satisfied & retention" },
];

const AboutArea = () => {
    return (
        <>
            <section className="quanto-about2-section bg-color-white section-padding-top-bottom overflow-hidden">
                <div className="container custom-container">
                    <div className="row align-items-start">
                        <div className="col-xl-6">
                            <div className="quanto-about2__thumb overflow-hidden pe-xl-4 sticky-top">
                                <Image
                                    height={0}
                                    width={0}
                                    sizes="100vw"
                                    src="/images/about/about-thumb-3-1.png"
                                    alt="about-thumb"
                                    className="w-100 h-100 object-cover"
                                />
                            </div>
                        </div>
                        <div className="col-xl-6 gsap-scroll">
                            <div className="quanto-about2__content row-margin-top ps-xl-4">
                                <h3>
                                    Simple in approach but world class branding
                                    solutions
                                </h3>
                                <p className="mt-3 mt-lg-4">
                                    Our approach is all about understanding your
                                    needs and bringing your ideas without
                                    complexity. We thrive turning imaginative
                                    concepts into user-friendly digital
                                    solutions. Whether it’s a sleek website, a
                                    user-friendly.
                                </p>
                                <Hyperlink
                                    className="mt-4 mt-lg-5"
                                    href="/about"
                                >
                                    More about us
                                </Hyperlink>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="quanto-funfacts__wrapper extend">
                                            {funFacts.map((item, i) => (
                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        x: 100,
                                                    }}
                                                    whileInView={{
                                                        opacity: 1,
                                                        x: 0,
                                                        transition: {
                                                            duration: 1,
                                                        },
                                                    }}
                                                    viewport={{ once: true }}
                                                    key={i}
                                                    className="quanto-funfact-box"
                                                >
                                                    <h2 className="counter-item d-inline-flex align-items-center">
                                                        <Meter
                                                            value={item.value}
                                                        />
                                                        <em>{item.suffix}</em>
                                                    </h2>
                                                    <span className="funfact-info">
                                                        {item.label}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutArea;
