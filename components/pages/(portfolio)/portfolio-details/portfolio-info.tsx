"use client";
import MoveAnim from "@/components/framer/move-anim";
import Hyperlink from "@/components/ui/hyperlink";
import Image from "next/image";
import * as motion from "motion/react-client";

const detailsData = [
    { title: "Category", info: "Branding", delay: 0.2 },
    { title: "Service", info: "Brand Strategy", delay: 0.4 },
    { title: "Date", info: "March 6, 2024", delay: 0.6 },
    { title: "Client", info: "MirrorTheme", delay: 0.8 },
    { title: "Software", info: "Webflow, Figma", delay: 1.0 },
];

const PortfolioInfo = () => {
    return (
        <div
            id="quanto-portfolio-details-section"
            className="quanto-portfolio-details-section section-padding-top-bottom"
        >
            <div className="container custom-container">
                <div className="row g-4 justify-content-between">
                    <div className="col-lg-4">
                        <MoveAnim>
                            <h2 className="portfolio-details__title">
                                Project overview
                            </h2>
                        </MoveAnim>
                    </div>
                    <div className="col-lg-6">
                        <div className="portfolio-details__content">
                            <MoveAnim>
                                <p>
                                    Tasked with revamping the branding and
                                    corporate website for Bit Weaver Studio, a
                                    forward-thinking creative agency, our team
                                    delved deep into their ethos, distilling
                                    their essence into a kaleidoscope of colors,
                                    shapes, and narratives. Seamlessly blending
                                    innovative design with user-centric
                                    functionality, we transformed their online
                                    presence into an immersive journey,
                                    reflecting their diverse talents and
                                    imaginative approach. From the fluidity of
                                    the logo to the intricacies of the
                                    interface, every element was meticulously
                                    crafted, resulting in a captivating showcase
                                    of Reimagining Reality creativity and our
                                    studio&#39;s design finesse.
                                </p>
                            </MoveAnim>
                            <MoveAnim>
                                <p className="portfolio-text">
                                    This package is ideal for businesses aiming
                                    to launch new products, enhance existing
                                    ones, or establish competitive edge in their
                                    industry. By combining thoughtful design,
                                    strategic innovation, and a user-first
                                    approach, we create products.
                                </p>
                            </MoveAnim>
                            <Hyperlink href="/">Visit live website</Hyperlink>
                        </div>

                        {/* ✅ Dynamic Info Section with framer-motion */}
                        <div className="portfolio-details__info row-padding-top">
                            {detailsData.map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="portfolio-details-box"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,

                                        transition: {
                                            duration: 0.6,
                                            delay: item.delay,
                                            ease: "easeOut",
                                        },
                                    }}
                                    viewport={{ once: true }}
                                >
                                    <span className="title">{item.title}</span>
                                    <h6 className="info">{item.info}</h6>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ✅ Images Section */}
                <div className="row g-3 g-lg-4 section-padding-top">
                    <div className="col-sm-6 overflow-hidden">
                        <Image
                            height={0}
                            width={0}
                            sizes="100vw"
                            src="/images/portfolio-details/portfolio-details-fig-1.png"
                            alt="portfolio-details-fig"
                            data-speed="0.8"
                            className="w-100"
                        />
                    </div>
                    <div className="col-sm-6 overflow-hidden">
                        <Image
                            height={0}
                            width={0}
                            sizes="100vw"
                            src="/images/portfolio-details/portfolio-details-fig-2.png"
                            alt="portfolio-details-fig"
                            data-speed="0.8"
                            className="w-100"
                        />
                    </div>
                    <div className="col-12 overflow-hidden">
                        <Image
                            height={0}
                            width={0}
                            sizes="100vw"
                            src="/images/portfolio-details/portfolio-details-fig-3.png"
                            alt="portfolio-details-fig"
                            data-speed="0.8"
                            className="w-100"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioInfo;
