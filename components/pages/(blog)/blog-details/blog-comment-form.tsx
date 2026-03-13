const BlogCommentForm = () => {
    return (
        <>
            <div className="blog-contact-form row-margin-top">
                <h4>Leave a reply</h4>
                <p>
                    Your email address will not be published. Required fields
                    are marked *
                </p>
                <form
                    action="index"
                    method="post"
                    className="quanto-cform row-margin-top"
                    autoComplete="off"
                >
                    <div className="row g-3">
                        <div className="col-md-6">
                            <div className="mb-2">
                                <input
                                    type="text"
                                    id="firstn"
                                    name="firstn"
                                    className="form-control"
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-2">
                                <input
                                    type="email"
                                    id="lastn"
                                    name="lastn"
                                    className="form-control"
                                    placeholder="Enter your e-mail address"
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mb-2">
                                <textarea
                                    name="message"
                                    id="message"
                                    className="form-control"
                                    rows={6}
                                    placeholder="Write your comment..."
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-12 mt-4">
                            <button
                                type="submit"
                                className="quanto-link-btn btn-pill mt-2"
                            >
                                Submit Now
                                <span>
                                    <i className="fa-solid fa-arrow-right arry1" />
                                    <i className="fa-solid fa-arrow-right arry2" />
                                </span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default BlogCommentForm;
