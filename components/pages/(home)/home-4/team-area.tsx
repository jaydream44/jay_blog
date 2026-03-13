"use client";
import TeamAreaCard from "@/components/common/team-area-card";
import Hyperlink from "@/components/ui/hyperlink";
import { teamMembers } from "@/data/data";
import * as motion from "motion/react-client";

const TeamArea = () => {
    return (
        <>
            <section className="quanto-team-area bg-color-white section-padding-top-bottom">
                <div className="container custom-container">
                    <div className="row gx-4 gy-5 gy-lg-4">
                        <div className="col-lg-6 gsap-sticky">
                            <div className="quanto__header">
                                <motion.h3
                                    initial={{ opacity: 0, x: -100 }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                        transition: {
                                            duration: 0.5,
                                        },
                                    }}
                                    viewport={{ once: true }}
                                    className="title text-center text-md-start fade-anim"
                                    data-direction="left"
                                >
                                    Introducing our skilled team
                                </motion.h3>
                                <Hyperlink href="/team">
                                    Join the team
                                </Hyperlink>
                            </div>
                        </div>
                        <div className="col-lg-6 gsap-scroll">
                            <div className="row g-4">
                                {/* team card start */}
                                {teamMembers.slice(0, 4).map((item, i) => (
                                    <motion.div
                                        initial={{ opacity: 0, x: 100 }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                            transition: {
                                                duration: 0.8,
                                                delay: i * 0.2,
                                            },
                                        }}
                                        viewport={{ once: true }}
                                        key={i}
                                        className="col-sm-6"
                                    >
                                        <TeamAreaCard data={item} />
                                    </motion.div>
                                ))}
                                {/* team card end */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeamArea;
