"use client";
import { teamMembers } from "@/data/data";
import Hyperlink from "@/components/ui/hyperlink";
import TeamAreaCard from "@/components/common/team-area-card";
import * as motion from "motion/react-client";

interface Props {
    style?: "style-2";
}

const TeamArea = ({ style }: Props) => {
    return (
        <>
            <section
                className={`quanto-team-area ${
                    style === "style-2"
                        ? "section-padding-bottom"
                        : "section-padding-top"
                }`}
            >
                <div className="container custom-container">
                    <div className="row gx-4 gy-2 align-items-end">
                        <div className="col-md-9 col-xl-7 col-xxl-6">
                            <div className="quanto__header">
                                <motion.h3
                                    className="title text-center text-md-start"
                                    initial={{ opacity: 0, x: -100 }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                        transition: {
                                            duration: 0.5,
                                        },
                                    }}
                                    viewport={{ once: true }}
                                >
                                    Meet our innovative team members
                                </motion.h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-xl-5 col-xxl-6">
                            <div className="quanto__headerr d-flex justify-content-center justify-content-lg-end">
                                <Hyperlink href="/team">
                                    Join the team
                                </Hyperlink>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 g-sm-3 g-md-4 row-padding-top">
                        {/* team card start */}
                        {teamMembers.slice(0, 4).map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        duration: 0.5,
                                        delay: i * 0.1,
                                    },
                                }}
                                viewport={{ once: true }}
                                className="col-sm-6 col-md-6 col-lg-4 col-xl-3"
                            >
                                <TeamAreaCard data={item} />
                            </motion.div>
                        ))}
                        {/* team card end */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeamArea;
