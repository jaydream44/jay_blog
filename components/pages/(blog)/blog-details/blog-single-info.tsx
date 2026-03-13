"use client";
import Link from "next/link";
import BlogComment from "./blog-comment";
import BlogCommentForm from "./blog-comment-form";
import Image from "next/image";
import MoveAnim from "@/components/framer/move-anim";
import { social } from "@/data/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

const BlogSingleInfo = () => {
    const scrollRef = useRef(null);

    const isMobile = useMediaQuery("(max-width: 767px)");

    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

    return (
        <>
            <section className="blog-page-sec blog-detail-page section-padding-bottom">
                <div className="container custom-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="blog-item-wrapper">
                                <div className="blog-item blog-item-details">
                                    <div className="row justify-content-center row-padding-bottom">
                                        <div className="col-xl-9 col-xxl-9">
                                            <MoveAnim>
                                                <div className="title-box blog-title">
                                                    <h2>
                                                        <Link href="/blog-details">
                                                            Reveal business
                                                            opportunities with
                                                            our five point brand
                                                            audit
                                                        </Link>
                                                    </h2>
                                                </div>
                                            </MoveAnim>
                                            <div className="meta-box">
                                                <ul className="custom-ul meta-info d-flex">
                                                    <li>
                                                        <span>
                                                            <Link href="/">
                                                                March 26, 2023
                                                            </Link>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <Link href="/">
                                                                Branding
                                                            </Link>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <Link href="/">
                                                                by Ashton Porter
                                                            </Link>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="img-box overflow-hidden">
                                        <Image
                                            height={0}
                                            width={0}
                                            sizes="100vw"
                                            src="/images/blog/blog-details-1.png"
                                            alt="blog"
                                            data-speed="0.8"
                                            className="w-100 d-block"
                                        />
                                    </div>

                                    <div className="content-box row-padding-top">
                                        <div className="social-links sticky-social">
                                            <ul className="custom-ul">
                                                {social.map((item, i) => (
                                                    <li key={i}>
                                                        <Link
                                                            href={item.href}
                                                            target="_blank"
                                                        >
                                                            <i
                                                                className={
                                                                    item.iconClass
                                                                }
                                                            />
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <motion.div
                                            ref={scrollRef}
                                            className="row justify-content-center social-links-scroll position-relative"
                                            style={{ y: isMobile ? 0 : y }}
                                        >
                                            <div className="col-xl-9 col-xxl-8">
                                                <div className="blog-body">
                                                    <p className="blog-text">
                                                        In the realm of digital
                                                        innovation...
                                                    </p>
                                                    <p>
                                                        The vision behind the
                                                        &quot;Beyond the
                                                        Screen&quot;...
                                                    </p>
                                                    <blockquote>
                                                        <Image
                                                            height={54}
                                                            width={70}
                                                            src="/images/icons/blockquote.svg"
                                                            alt="blockquote"
                                                        />
                                                        <div className="text">
                                                            <p>
                                                                &quot;Quanto
                                                                team quickly
                                                                understood our
                                                                business...
                                                            </p>
                                                            <cite>
                                                                ─ Ashton Porter
                                                            </cite>
                                                        </div>
                                                    </blockquote>
                                                    <p className="blog-text">
                                                        The cornerstone of our
                                                        design philosophy...
                                                    </p>
                                                    <p>
                                                        The vision behind the
                                                        &quot;Beyond the
                                                        Screen&quot;...
                                                    </p>
                                                    <div className="quanto-single-thumb overflow-hidden">
                                                        <Image
                                                            height={0}
                                                            width={0}
                                                            sizes="100vw"
                                                            src="/images/blog/blog-details-img-1.png"
                                                            alt="/blog-details"
                                                            data-speed="0.8"
                                                            className="w-100"
                                                        />
                                                    </div>
                                                    <p className="blog-text">
                                                        The vision behind the
                                                        &quot;Beyond the
                                                        Screen&quot;...
                                                    </p>
                                                    <p>
                                                        In the realm of digital
                                                        innovation...
                                                    </p>
                                                </div>

                                                <div className="blog-tags">
                                                    <ul className="custom-ul">
                                                        <li>
                                                            <Link href="/blog-details">
                                                                Design
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/blog-details">
                                                                Development
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/blog-details">
                                                                Marketing
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <BlogComment />
                                                <BlogCommentForm />
                                            </div>
                                        </motion.div>
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

export default BlogSingleInfo;
