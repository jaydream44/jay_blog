"use client";
import React from "react";
import Link from "next/link";
import TeamAreaCard from "@/components/common/team-area-card";
import { teamMembers } from "@/data/data";
import * as motion from "motion/react-client";

const TeamArea = () => {
    return (
        <section
            id="quanto-team-area"
            className="quanto-team-area section-padding-top-bottom"
        >
            <div className="container custom-container">
                <div className="row gx-4 gy-2 align-items-end">
                    <div className="col-md-9 col-xl-7 col-xxl-6">
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
                                className="title text-center text-md-start"
                            >
                                Meet our innovative team members
                            </motion.h3>
                        </div>
                    </div>
                    <div className="col-md-3 col-xl-5 col-xxl-6">
                        <div className="quanto__headerr d-flex justify-content-center justify-content-lg-end">
                            <Link href="/team" className="quanto-link-btn">
                                Join the team
                                <span>
                                    <i className="fa-solid fa-arrow-right arry1" />
                                    <i className="fa-solid fa-arrow-right arry2" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row gx-4 gy-5 gx-sm-3 gx-md-4 row-padding-top">
                    {/* team card start */}
                    {teamMembers.slice(0, 8).map((item, i) => (
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
    );
};

export default TeamArea;
