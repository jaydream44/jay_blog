import { Blog2Type } from "@/types/global";
import Image from "next/image";
import Link from "next/link";

interface Props {
    data: Blog2Type;
}

const BlogAreaCard = ({ data }: Props) => {
    return (
        <>
            <div className="quanto-blog-box style-2 border-bottom-style fade-anim">
                <div className="quanto-blog-content">
                    <span className="quanto-blog-date">{data.date}</span>
                    <h5 className="line-clamp-3">
                        <Link href="/blog-details">{data.title}</Link>
                    </h5>
                    <Link className="quanto-link-btn" href="/blog-details">
                        Read more
                        <span>
                            <i className="fa-solid fa-arrow-right arry1" />
                            <i className="fa-solid fa-arrow-right arry2" />
                        </span>
                    </Link>
                </div>
                <div className="quanto-blog-thumb">
                    <Link
                        href="/blog-details"
                        className="d-inline-block overflow-hidden"
                    >
                        <Image
                            height={0}
                            width={0}
                            sizes="100vw"
                            src={data.imgSrc}
                            alt="blog-thumb"
                            className="w-100"
                        />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default BlogAreaCard;
