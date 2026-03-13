"use client";
import Meter from "@/components/common/meter";
import MoveAnim from "@/components/framer/move-anim";
import Hyperlink from "@/components/ui/hyperlink";

const AboutArea = () => {
    return (
        <>
            <section
                className="quanto-about-section section-padding-top-bottom"
                id="about-section"
            >
                <div className="container custom-container">
                    <div className="row g-4 justify-content-between">
                        <div className="col-lg-8 col-xl-7 col-xxl-6">
                            <MoveAnim>
                                <h3>
                                    We shape brands through purposeful design,
                                    meticulous builds and lasting results
                                </h3>
                            </MoveAnim>
                        </div>
                        <div className="col-lg-4 col-xl-5 col-xxl-5">
                            <div className="quanto-about__content style-2">
                                <MoveAnim>
                                    <p>
                                        Our approach is all about understanding
                                        your needs and bringing your ideas to
                                        life without complexity. We thrive
                                        turning imaginative concepts into user
                                        friendly digital solutions. Whether
                                        it&apos;s a sleek.
                                    </p>
                                </MoveAnim>
                                <Hyperlink href="/about">
                                    More about us
                                </Hyperlink>
                                <div className="price-info">
                                    <h2 className="counter-item d-inline-flex align-items-center">
                                        <em className="fst-normal">$</em>
                                        <Meter value={21} />
                                        <em className="fst-normal">M</em>
                                    </h2>
                                    <p>
                                        We assisted companies is securing over
                                        $21M in funding successfully.
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

export default AboutArea;
