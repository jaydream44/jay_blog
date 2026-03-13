import Hyperlink from "@/components/ui/hyperlink";
import Image from "next/image";

const BlogComment = () => {
    return (
        <>
            <div className="blog-comments row-margin-top">
                <h4>2 Comments</h4>
                <ul className="custom-ul">
                    <li className="comment-item">
                        <div className="post-comment">
                            <div className="comment-avater">
                                <Image
                                    height={110}
                                    width={110}
                                    src="/images/blog/comment-avater.png"
                                    alt="Comment Author"
                                />
                            </div>
                            <div className="comment-content">
                                <h6 className="name">Tony Lixivel</h6>
                                <span className="commented-on">
                                    December 3, 2024 | 9:32 am
                                </span>
                                <p className="text">
                                    But in order that you may see whence all
                                    this born error of those who accuse pleasure
                                    and praise pain will open the whole matter,
                                    and explain the very things which were.
                                </p>
                                <div className="reply_and_edit">
                                    <Hyperlink href="/">Reply</Hyperlink>
                                </div>
                            </div>
                        </div>
                        <ul className="custom-ul children">
                            <li className="comment-item">
                                <div className="post-comment">
                                    <div className="comment-avater">
                                        <Image
                                            height={110}
                                            width={110}
                                            src="/images/blog/comment-avater2.png"
                                            alt="Comment Author"
                                        />
                                    </div>
                                    <div className="comment-content">
                                        <h6 className="name">Audrey Tassel</h6>
                                        <span className="commented-on">
                                            December 3, 2024 | 10:12 am
                                        </span>
                                        <p className="text">
                                            We love to bring designs to life as
                                            a developer, and I aim to do this
                                            using whatever front end tools
                                            aren&apos;t necessary. my preferred
                                            tools.
                                        </p>
                                        <div className="reply_and_edit">
                                            <Hyperlink href="/">
                                                Reply
                                            </Hyperlink>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default BlogComment;
