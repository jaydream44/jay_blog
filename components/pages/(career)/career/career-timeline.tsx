"use client";
import MoveAnim from "@/components/framer/move-anim";
import Hyperlink from "@/components/ui/hyperlink";
import { careerTimeline } from "@/data/data";
import * as motion from "motion/react-client";

const CareerTimeline = () => {
    return (
        <section
            id="quanto-career-section"
            className="quanto-career-section section-padding-top-bottom overflow-hidden"
        >
            <div className="container custom-container">
                <div className="row gx-4 gy-5">
                    <div className="col-lg-9 col-xxl-7">
                        <div className="quanto__header row-padding-bottom text-center text-md-start">
                            <MoveAnim>
                                <h3 className="title">
                                    Current opportunities waiting for you
                                </h3>
                            </MoveAnim>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {/* career card start */}
                        {careerTimeline.slice(0, 4).map((item, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.6,
                                    },
                                }}
                                viewport={{ once: true, amount: 0.2 }}
                                key={i}
                                className="career-main"
                            >
                                <div className="career-box">
                                    <div className="career-left">
                                        <h5 className="job-title">
                                            {item.title}
                                        </h5>
                                        <p className="job-location">
                                            {item.location}
                                        </p>
                                    </div>
                                    <div className="career-center">
                                        <h5 className="apply-dateline">
                                            {item.deadline}
                                        </h5>
                                        <p className="job-role">
                                            Open roles:
                                            <span>
                                                {item.roles
                                                    .toString()
                                                    .padStart(2, "0")}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="career-right">
                                        <Hyperlink
                                            href="/career-details"
                                            variant="primary"
                                        >
                                            Apply Now
                                        </Hyperlink>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                        {/* career card end */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerTimeline;
