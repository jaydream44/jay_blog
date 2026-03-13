"use client";
import { projects2 } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import useMediaQuery from "@/hooks/useMediaQuery";

const ProjectArea = () => {
    const isMobile = useMediaQuery("(max-width: 767px)");

    return (
        <section className="quanto-project-section bg-color-primary section-padding-bottom">
            <div className="container custom-container">
                <div className="row gx-4 g-5 justify-content-between align-items-center">
                    {projects2.map((item, i) => {
                        const columnSize =
                            i % 2 === 0
                                ? "col-md-6 col-lg-4"
                                : "col-md-6 col-lg-7";

                        return (
                            <div key={i} className={columnSize}>
                                <div
                                    className={`quanto-project-box overflow-hidden ${
                                        i % 2 === 0
                                            ? "justify-content-end"
                                            : "justify-content-start"
                                    }`}
                                >
                                    <Link href="/portfolio-details">
                                        <motion.div
                                            initial={{
                                                x: isMobile ? -200 : -400,
                                                opacity: 0,
                                            }}
                                            whileInView={{ x: 0, opacity: 1 }}
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
                                                src={item.imageUrl}
                                                alt="project-thumb"
                                                className="w-100"
                                            />
                                        </motion.div>
                                    </Link>

                                    <div className="quanto-project-content">
                                        <h5 className="text-color-white line-clamp-1">
                                            <Link href="/portfolio-details">
                                                {item.title}
                                            </Link>
                                        </h5>
                                        <span className="quanto-project-date text-color-white">
                                            {item.year}
                                            <i className="bi bi-dash" />
                                            {item.category}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProjectArea;
