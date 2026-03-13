"use client";
import { projects5 } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import useMediaQuery from "@/hooks/useMediaQuery";

const ProjectItem = () => {
    const isMobile = useMediaQuery("(max-width: 767px)");

    return (
        <section className="quanto-project-section bg-color-white section-padding-bottom">
            <div className="container custom-container">
                <div className="row gx-4 gy-5 justify-content-between align-items-center">
                    {projects5.map((item) => (
                        <div
                            key={item.id}
                            className={`${item.colMd} ${item.colLg}`}
                        >
                            <div className="row justify-content-center">
                                <div
                                    className={`col-xl-9 ${
                                        item.align === "end"
                                            ? "justify-content-end"
                                            : item.align === "start"
                                            ? "justify-content-start"
                                            : ""
                                    }`}
                                >
                                    <div className="quanto-project-box overflow-hidden">
                                        <Link href="/portfolio-details">
                                            <motion.div
                                                initial={{
                                                    x: isMobile ? -200 : -300,
                                                    opacity: 0,
                                                }}
                                                whileInView={{
                                                    x: 0,
                                                    opacity: 1,
                                                }}
                                                transition={{
                                                    duration: 0.6,
                                                    ease: "easeOut",
                                                }}
                                                viewport={{
                                                    once: true,
                                                    amount: 0.1,
                                                }}
                                                className="quanto-project-thumb overflow-hidden"
                                            >
                                                <Image
                                                    height={0}
                                                    width={0}
                                                    sizes="100vw"
                                                    src={item.image}
                                                    alt="project-thumb"
                                                    className="w-100 img_reveal"
                                                />
                                            </motion.div>
                                        </Link>
                                        <div className="quanto-project-content">
                                            <h5 className="text-color-primary line-clamp-1">
                                                <Link href="/portfolio-details">
                                                    {item.title}
                                                </Link>
                                            </h5>
                                            <span className="quanto-project-date text-color-primary">
                                                {item.year}
                                                <i className="bi bi-dash" />
                                                {item.category}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectItem;
