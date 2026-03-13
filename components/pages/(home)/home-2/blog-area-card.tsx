import { BlogType } from "@/types/global";
import Image from "next/image";
import Link from "next/link";

interface Props {
    data: BlogType;
}

const BlogAreaCard = ({ data }: Props) => {
    return (
        <>
            <div className={`quanto-blog-box style-2 border-bottom-style`}>
                <div className="quanto-blog-content">
                    <span className="quanto-blog-date">{data.date}</span>
                    <h5 className="line-clamp-3">
                        <Link href={data.url}>{data.title}</Link>
                    </h5>
                    <Link className="quanto-link-btn" href={data.url}>
                        Read more
                        <span>
                            <i className="fa-solid fa-arrow-right arry1" />
                            <i className="fa-solid fa-arrow-right arry2" />
                        </span>
                    </Link>
                </div>
                <div className="quanto-blog-thumb">
                    <Link
                        href={data.url}
                        className="d-inline-block overflow-hidden"
                    >
                        <Image
                            height={0}
                            width={0}
                            sizes="100vw"
                            src={data.imageUrl}
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
