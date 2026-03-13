"use client";
import MoveAnim from "@/components/framer/move-anim";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";

const teamMember = {
    name: "Audrey Tassel",
    role: "Administrative & HR Assistant",
    description: [
        "Jassica Oliver is known for her ability to take a creative brief and run with it, coming back with fresh ideas and a perfectly built design file every time. From digital design to long-format layouts, she blends beautiful and intuitive with each project she touches. She also happens to be the queen of deadline-crushing, all while maintaining a can-do, Zen attitude that keeps the whole Statement team centered.",
        "When he’s not building strong alliances with other creatives, project managers and stakeholders alike, you’ll find him giving voice to client strategies with fresh, compelling concepts and delightfully clever messaging.",
    ],
    email: "audrey@tassel.com",
    phone: "+1 888 456 7890",
    imageUrl: "/images/team-details/team-details-thumb.png",
    socialLinks: {
        twitter: "https://x.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
        behance: "https://behance.net",
        dribbble: "https://dribbble.com",
    },
};

const getIconClass = (platform: string) => {
    if (platform === "twitter") return "fab fa-x-twitter";
    return `fab fa-${platform}`;
};

const Hero = () => {
    return (
        <section className="quanto-team-details-section section-padding-top-bottom overflow-hidden">
            <div className="container custom-container">
                <div className="row g-4 justify-content-between">
                    {/* Image Section */}
                    <div className="col-xl-6 col-xxl-5">
                        <div className="team-details__thumb">
                            <Image
                                src={teamMember.imageUrl}
                                alt={teamMember.name}
                                width={600}
                                height={600}
                                sizes="100vw"
                                data-speed="0.8"
                                className="w-100 h-auto"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="col-xl-6 col-xxl-6">
                        <div className="team-details__content">
                            <MoveAnim>
                                <h2 className="member-title">
                                    {teamMember.name}
                                </h2>
                            </MoveAnim>
                            <MoveAnim>
                                <h5 className="member-description">
                                    {teamMember.role}
                                </h5>
                            </MoveAnim>

                            <div className="member-info">
                                {teamMember.description.map((item, i) => (
                                    <motion.p
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                duration: 0.8,
                                                delay: i * 0.1,
                                            },
                                        }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        key={i}
                                        className="fade-anim"
                                    >
                                        {item}
                                    </motion.p>
                                ))}
                            </div>

                            <div className="member-contacts">
                                <h5>
                                    <Link href={`mailto:${teamMember.email}`}>
                                        {teamMember.email}
                                    </Link>
                                </h5>
                                <Link href={`tel:${teamMember.phone}`}>
                                    {teamMember.phone}
                                </Link>
                            </div>

                            <div className="member-social">
                                <ul className="custom-ul">
                                    {Object.entries(teamMember.socialLinks).map(
                                        ([platform, url]) => (
                                            <li key={platform}>
                                                <Link
                                                    href={url}
                                                    target="_blank"
                                                    aria-label={platform}
                                                >
                                                    <i
                                                        className={getIconClass(
                                                            platform
                                                        )}
                                                    />
                                                </Link>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form className="w-100 team-details__message">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.8,
                                    },
                                }}
                                viewport={{ once: true, amount: 0.4 }}
                                className="row g-3 mb-4"
                            >
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Your name"
                                        name="name"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter e-mail address"
                                        name="email"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.8,
                                    },
                                }}
                                viewport={{ once: true, amount: 0.4 }}
                                className="mb-4 mb-lg-5 fade-anim"
                                data-delay="0.6"
                            >
                                <textarea
                                    className="form-control"
                                    rows={9}
                                    placeholder="Write your message"
                                    name="message"
                                />
                            </motion.div>

                            <button
                                type="submit"
                                className="quanto-link-btn btn-pill bg-color-2"
                            >
                                Submit
                                <span>
                                    <i className="fa-solid fa-arrow-right arry1" />
                                    <i className="fa-solid fa-arrow-right arry2" />
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
